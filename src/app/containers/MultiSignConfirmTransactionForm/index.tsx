/**
 *
 * MultiSignConfirmTransactionForm
 *
 */

import React, { useCallback, useEffect, useState } from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { multiSignConfirmTransactionFormSaga } from './saga';
import { Button, FormGroup, InputGroup, Spinner } from '@blueprintjs/core';
import { multisign_confirmTransaction } from '../BlockChainProvider/requests/multisig';
import { useGetGasPrice } from 'app/hooks/useGetGasPrice';

interface Props {
  transactionId: string;
}

export function MultiSignConfirmTransactionForm(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: multiSignConfirmTransactionFormSaga });

  const gasPrice = useGetGasPrice();

  const [transactionId, setTransactionId] = useState<string>(
    props.transactionId,
  );
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event && event.preventDefault && event.preventDefault();
      setIsLoading(true);
      try {
        await multisign_confirmTransaction(
          transactionId,
          (Number(gasPrice.value) * 1e9).toString(),
        );
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    },
    [transactionId, gasPrice.value],
  );

  useEffect(() => {
    setIsValid(!!transactionId);
  }, [transactionId]);

  useEffect(() => {
    setTransactionId(props.transactionId);
  }, [props.transactionId]);

  return (
    <div className="bg-white rounded shadow p-3 lg:flex-1">
      <h3 className="mb-3 font-semibold">Confirm Transaction</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Transaction ID">
          <InputGroup
            leftIcon={'numerical'}
            value={transactionId}
            onChange={e => setTransactionId(e.currentTarget.value)}
            placeholder="1"
          />
        </FormGroup>
        <FormGroup label="Gas Price (gwei)">
          <InputGroup
            leftIcon={'numerical'}
            value={gasPrice.value}
            onChange={event => gasPrice.set(event.currentTarget.value)}
            placeholder="0.065"
            rightElement={gasPrice.loading ? <Spinner size={16} /> : <></>}
          />
        </FormGroup>
        <Button
          type="submit"
          fill
          icon={'send-to'}
          text="Confirm Transaction"
          disabled={!isValid || isLoading}
          loading={isLoading}
        />
      </form>
    </div>
  );
}
