/**
 *
 * MultiSigTransactionForm
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { multiSigTransactionFormSaga } from './saga';
import { ISubmitTransactionSignature, TxType } from './types';
import {
  FormGroup,
  HTMLSelect,
  InputGroup,
  Button,
  Spinner,
} from '@blueprintjs/core';
import { SwitchDataForm } from './components/SwitchDataForm';
import {
  checkAddressChecksum,
  toChecksumAddress,
  toWei,
} from '../../../utils/helpers';
import { bignumber } from 'mathjs';
import { multisign_submitTransaction } from '../BlockChainProvider/requests/multisig';
import { selectBlockChainProvider } from '../BlockChainProvider/selectors';
import { DestinationOption } from '../BlockChainProvider/types';
import { destinations } from '../BlockChainProvider/classifiers';
import { useGetGasPrice } from 'app/hooks/useGetGasPrice';

const txTypeOptions = [
  { value: TxType.CUSTOM, label: 'Custom data' },
  { value: TxType.ERC20_TRANSFER, label: 'Transfer ERC20 Token' },
];

interface Props {}

export function MultiSigTransactionForm(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: multiSigTransactionFormSaga });

  const { chainId, network } = useSelector(selectBlockChainProvider);
  const gasPrice = useGetGasPrice();

  const [form, setForm] = useState<ISubmitTransactionSignature>({
    destination: '',
    value: '',
    data: '0x',
  });
  const [txType, setTxType] = useState<string>(String(TxType.ERC20_TRANSFER));
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [destinationOptions, setDestinationOptions] = useState<
    DestinationOption[]
  >([]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event && event.preventDefault && event.preventDefault();
      setIsLoading(true);
      try {
        await multisign_submitTransaction(
          form.destination,
          toWei(form.value),
          form.data,
          (Number(gasPrice.value) * 1e9).toString(),
        );
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    },
    [form, gasPrice.value],
  );

  const handleInputChange = useCallback(
    (fieldName: keyof ISubmitTransactionSignature) => (
      event: React.FormEvent<HTMLInputElement>,
    ) => {
      const value = event.currentTarget.value;
      setForm(prevState => ({ ...prevState, [fieldName]: value }));
    },
    [],
  );

  useEffect(() => {
    try {
      const address = toChecksumAddress(form.destination);
      const destinationValid = checkAddressChecksum(address);
      const validEth = bignumber(form.value || '0').greaterThanOrEqualTo('0');
      setIsValid(destinationValid && validEth);
    } catch (e) {
      setIsValid(false);
    }
  }, [form]);

  useEffect(() => {
    setDestinationOptions([
      { value: '', label: 'Custom' },
      ...destinations[network],
    ]);
  }, [network]);

  return (
    <div className="bg-white rounded shadow p-3 lg:flex-1">
      <h3 className="mb-3 font-semibold">Submit Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="md:flex md:space-x-4">
          <div className="md:w-7/12">
            <FormGroup label="Destination">
              <InputGroup
                leftElement={
                  <HTMLSelect
                    className="mr-3"
                    onChange={e =>
                      setForm(prevState => ({
                        ...prevState,
                        destination: e.currentTarget.value,
                      }))
                    }
                    options={destinationOptions}
                    value={form.destination}
                  />
                }
                value={form.destination}
                onChange={handleInputChange('destination')}
                placeholder="0x95f1f9393D1d3e46Df2cDa491fc323E142758c21"
              />
            </FormGroup>
          </div>
          <div className="md:w-5/12">
            <FormGroup
              label={[30, 31].includes(chainId) ? 'rBTC amount' : 'ETH amount'}
            >
              <InputGroup
                leftIcon={'numerical'}
                value={form.value}
                onChange={handleInputChange('value')}
                placeholder="0.001"
                rightElement={
                  <div className="py-2 px-3 text-xs text-gray-500">
                    {[30, 31].includes(chainId) ? 'rBTC' : 'ETH'}
                  </div>
                }
              />
            </FormGroup>
          </div>
        </div>
        <SwitchDataForm
          value={form}
          type={txType}
          onData={data => setForm(prevState => ({ ...prevState, data }))}
        />

        <div className="p-3 bg-gray-300 text-sm break-all mb-3">
          {form.data}
        </div>

        <div className="md:flex md:space-x-4 mt-4">
          <div className="md:w-6/12">
            <FormGroup label="Gas Price (gwei)">
              <InputGroup
                leftIcon={'numerical'}
                value={gasPrice.value}
                onChange={event => gasPrice.set(event.currentTarget.value)}
                placeholder="0.065"
                rightElement={gasPrice.loading ? <Spinner size={16} /> : <></>}
              />
            </FormGroup>
          </div>
        </div>

        <div className="flex justify-between space-x items-center">
          <HTMLSelect
            options={txTypeOptions}
            value={txType}
            onChange={e => setTxType(e.currentTarget.value)}
          />
          <Button
            type="submit"
            icon={'send-to'}
            text="Submit Transaction"
            disabled={!isValid || isLoading}
            loading={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
