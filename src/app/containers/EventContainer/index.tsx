/**
 *
 * EventContainer
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectEventContainer } from './selectors';
import { eventContainerSaga } from './saga';
import { selectBlockChainProvider } from '../BlockChainProvider/selectors';
import { network } from '../BlockChainProvider/network';
import { RowSkeleton } from '../../components/PageSkeleton';
import { EventData } from 'web3-eth-contract';
import { LinkToExplorer } from '../../components/LinkToExplorer';

const blocksToLook = 5000;

interface Props {
  onSelect: (item: string) => void;
}

export function EventContainer(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: eventContainerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eventContainer = useSelector(selectEventContainer);
  const { syncBlockNumber } = useSelector(selectBlockChainProvider);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    setLoading(true);
    const get = async () => {
      const block = await network.block();
      const events = await network.getPastEvents(
        'multiSigWallet',
        'Submission',
        {},
        block - blocksToLook,
      );
      setEvents(events.reverse());
      setLoading(false);
    };
    get().then().catch(console.error);
  }, [syncBlockNumber]);

  const handleSelect = useCallback(
    (item: string) => {
      props.onSelect(item);
    },
    [props],
  );

  return (
    <div className="bg-white rounded shadow p-3">
      <h3 className="mb-3 font-semibold">Last submissions</h3>
      {loading && (
        <div className="flex w-full flex-col space-y-4">
          <RowSkeleton />
          <RowSkeleton />
          <RowSkeleton />
        </div>
      )}
      {!loading && events.length === 0 && (
        <>No submissions in last {blocksToLook} blocks.</>
      )}
      {!loading && events.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {events.map(e => (
            <SubmissionEvent
              key={e.returnValues.transactionId}
              item={e}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SubmissionEvent({
  item,
  onSelect,
}: {
  item: EventData;
  onSelect: (value: string) => void;
}) {
  const handleSelect = useCallback(
    e => {
      onSelect(e);
    },
    [onSelect],
  );

  return (
    <div className="rounded shadow p-3 text-xs">
      <div className="flex flex-row justify-between space-x-4 mb-2">
        <div className="text-gray-600">Tx ID:</div>
        <div>
          <a
            href="#!"
            onClick={() => handleSelect(item.returnValues.transactionId)}
          >
            {item.returnValues.transactionId.toLocaleString()}
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-4 mb-2">
        <div className="text-gray-600">Block:</div>
        <div>{item.blockNumber.toLocaleString()}</div>
      </div>
      <div className="flex flex-row justify-between space-x-4">
        <div className="text-gray-600">Tx Hash:</div>
        <div>
          <LinkToExplorer
            txHash={item.transactionHash}
            className="text-black hover:text-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
