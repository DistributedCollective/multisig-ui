import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { prettyTx } from 'utils/helpers';
import { selectBlockChainProvider } from '../../selectors';
import { walletConnection } from '../../web3-modal';
import { networkTitles } from '../../classifiers';
import { ChainId } from '../../types';

function getNetworkTitle(chainId: ChainId) {
  if (networkTitles.hasOwnProperty(chainId)) {
    return networkTitles[chainId];
  }
  return 'Unsupported Network';
}

export function WalletConnectorButton() {
  const { connected, connecting, address, chainId } = useSelector(
    selectBlockChainProvider,
  );

  const handleWalletConnection = useCallback(() => {
    walletConnection
      .connect()
      .then(() => {})
      .catch(console.error);
  }, []);

  const handleDisconnect = () => {
    walletConnection.disconnect().then(() => {});
  };

  return (
    <>
      {!connected && !address ? (
        <button
          onClick={handleWalletConnection}
          className="px-3 py-2 border-2 border-green-600 rounded text-sm text-green-600 font-bold transition duration-300 easy-in-out hover:text-white hover:bg-green-600"
        >
          {connecting && <>connecting...</>}
          {!connecting && <>Connect</>}
        </button>
      ) : (
        <div className="flex space-x-4 items-center">
          <div>{getNetworkTitle(chainId)}</div>
          <button
            className="px-3 py-2 border-2 border-green-600 rounded text-sm text-green-600 font-bold transition duration-300 easy-in-out hover:text-white hover:bg-green-600 truncate"
            onClick={handleDisconnect}
          >
            {prettyTx(address, 5, 3)}
          </button>
        </div>
      )}
    </>
  );
}
