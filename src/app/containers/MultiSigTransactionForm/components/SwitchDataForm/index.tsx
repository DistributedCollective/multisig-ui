import React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { ISubmitTransactionSignature, TxType } from '../../types';
import { Erc20TokenForm } from '../Erc20TokenForm';

interface Props {
  value: ISubmitTransactionSignature;
  type: string;
  onData: (data: string) => void;
}

export function SwitchDataForm({ type, value, onData }: Props) {
  switch (type) {
    default:
    case TxType.CUSTOM.toString():
      return (
        <FormGroup label="Transaction data">
          <InputGroup
            leftIcon={'briefcase'}
            value={value.data}
            onChange={e => onData(e.currentTarget.value)}
            placeholder="0x"
          />
        </FormGroup>
      );
    case TxType.ERC20_TRANSFER.toString():
      return <Erc20TokenForm onData={data => onData(data)} value={value} />;
  }
}
