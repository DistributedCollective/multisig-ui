import React, { useCallback } from 'react';
import { walletConnection } from '../../web3-modal';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';

interface Props {
  connected: boolean;
  connecting: boolean;
  address: string;
}

export function ConnectionGate({ connected, connecting, address }: Props) {
  const handleWalletConnection = useCallback(() => {
    walletConnection
      .connect()
      .then(() => {})
      .catch(console.error);
  }, []);

  return (
    <>
      <Helmet>
        <title>Connect to your wallet</title>
        <meta name="description" content="Connect to your wallet to use dapp" />
      </Helmet>
      <header className="w-full bg-black text-white py-5 flex-grow-0 flex-shrink-0">
        <div className="container flex flex-row justify-between items-center">
          <div>
            <Link
              to="/"
              className="text-white hover:text-gray-300 hover:no-underline"
            >
              Sovryn MultiSig
            </Link>
          </div>
        </div>
      </header>
      <main
        role="main"
        className="container py-5 flex-grow flex-shrink flex justify-center items-center"
      >
        <div className="text-center">
          <h2 className="leading-none mb-5">
            Sovryn MultiSig
            <br />
            Interface
          </h2>
          <button
            onClick={handleWalletConnection}
            className="px-3 py-2 border-2 border-green-600 rounded text-sm text-green-600 font-bold transition duration-300 easy-in-out hover:text-white hover:bg-green-600 text-2xl"
          >
            {connecting && (
              <div className="flex flex-row items-center">
                <Spinner size={28} className="mr-3" /> Connecting
              </div>
            )}
            {!connecting && <>Connect</>}
          </button>
        </div>
      </main>
    </>
  );
}
