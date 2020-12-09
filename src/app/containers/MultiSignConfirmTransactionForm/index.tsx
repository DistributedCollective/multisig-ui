/**
 *
 * MultiSignConfirmTransactionForm
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectMultiSignConfirmTransactionForm } from './selectors';
import { multiSignConfirmTransactionFormSaga } from './saga';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';
import { multisign_confirmTransaction } from '../BlockChainProvider/requests/multisig';

interface Props {
  transactionId: string;
}

export function MultiSignConfirmTransactionForm(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: multiSignConfirmTransactionFormSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const multiSignConfirmTransactionForm = useSelector(
    selectMultiSignConfirmTransactionForm,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

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
        await multisign_confirmTransaction(transactionId);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    },
    [transactionId],
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
