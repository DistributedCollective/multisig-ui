/**
 *
 * MultiSigTransactionForm
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { IErc20TransferSignature, ISubmitTransactionSignature } from '../types';
import { er20_transfer_abi } from '../../BlockChainProvider/requests/erc20';
import { toWei } from '../../../../utils/helpers';

interface Props {
  onData: (data: string) => void;
  value: ISubmitTransactionSignature;
}

export function Erc20TokenForm(props: Props) {
  const [form, setForm] = useState<IErc20TransferSignature>({
    receiver: '',
    amount: '',
  });

  const handleInputChange = useCallback(
    (fieldName: keyof IErc20TransferSignature) => (
      event: React.FormEvent<HTMLInputElement>,
    ) => {
      const value = event.currentTarget.value;
      setForm(prevState => ({ ...prevState, [fieldName]: value }));
    },
    [],
  );

  useEffect(() => {
    try {
      const data = er20_transfer_abi(form.receiver, toWei(form.amount));
      props.onData(data);
    } catch (e) {
      console.warn('data error', e.message);
      props.onData('0x');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <section>
      <h3 className="mb-2">ERC20.transfer:</h3>
      <div className="md:flex md:space-x-4">
        <div className="md:w-7/12">
          <FormGroup label="Receiver">
            <InputGroup
              leftIcon={'user'}
              value={form.receiver}
              onChange={handleInputChange('receiver')}
              placeholder="0x95f1f9393D1d3e46Df2cDa491fc323E142758c21"
            />
          </FormGroup>
        </div>
        <div className="md:w-5/12">
          <FormGroup label="Amount">
            <InputGroup
              leftIcon={'numerical'}
              value={form.amount}
              onChange={handleInputChange('amount')}
              placeholder="100.00000"
            />
          </FormGroup>
        </div>
      </div>
    </section>
  );
}
