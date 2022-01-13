/**
 *
 * BlockChainProvider
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectBlockChainProvider } from './selectors';
import { blockChainProviderSaga } from './saga';
import { PageSkeleton } from '../../components/PageSkeleton';
import { TransactionHistory } from '../TransactionHistory/Loadable';
import { ConnectionGate } from './components/ConnectionGate';
import { NetworkGate } from './components/NetworkGate';

interface Props {
  children: React.ReactNode;
}

export function BlockChainProvider(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: blockChainProviderSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const blockChainProvider = useSelector(selectBlockChainProvider);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setup());
  }, [dispatch]);

  if (!blockChainProvider.setupCompleted) {
    return <PageSkeleton />;
  }

  if (!blockChainProvider.connected || !blockChainProvider.address) {
    return <ConnectionGate {...blockChainProvider} />;
  }

  if (![1, 3, 30, 31, 97].includes(blockChainProvider.chainId)) {
    return <NetworkGate />;
  }

  return (
    <>
      <TransactionHistory />
      {props.children}
    </>
  );
}
