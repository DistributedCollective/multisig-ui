import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NetworkGate() {
  return (
    <>
      <Helmet>
        <title>Wrong Network</title>
        <meta name="description" content="Change Network" />
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
          <h2 className="leading-none mb-5">Wrong Network</h2>
          <p>Switch to RSK, Etherem or Binance Smart Chain network.</p>
        </div>
      </main>
    </>
  );
}
