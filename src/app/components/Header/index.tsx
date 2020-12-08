import React from 'react';
import { Link } from 'react-router-dom';
import { WalletConnectorButton } from '../../containers/BlockChainProvider/components/WalletConnectorButton';

export function Header() {
  return (
    <header className="bg-black text-white py-5 w-full flex-grow-0 flex-shrink-0">
      <div className="container flex flex-row justify-between items-center">
        <div>
          <Link
            to="/"
            className="text-white hover:text-white hover:no-underline"
          >
            Sovryn MultiSig
          </Link>
        </div>
        <div className="text-gray-400">
          <WalletConnectorButton />
        </div>
      </div>
    </header>
  );
}
