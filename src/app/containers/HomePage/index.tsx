import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Loadable';
import { Footer } from '../../components/Footer/Loadable';
import { MultiSigTransactionForm } from '../MultiSigTransactionForm';
import { MultiSignConfirmTransactionForm } from '../MultiSignConfirmTransactionForm';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sovryn MultiSig</title>
        <meta name="description" content="MultiSig UI" />
      </Helmet>
      <Header />
      <main className="w-full flex-grow">
        <div className="bg-black">
          <div className="container">
            <h2 className="text-white pt-20 pb-8">Sovryn MultiSig</h2>
          </div>
        </div>
        <div className="container py-5">
          <MultiSigTransactionForm />
          <div className="mt-5 md:flex md:flex-row md:space-x-4">
            <div className="md:w-4/12">
              <MultiSignConfirmTransactionForm />
            </div>
            {/*<div className="mt-5 md:mt-0 md:w-8/12">events.</div>*/}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
