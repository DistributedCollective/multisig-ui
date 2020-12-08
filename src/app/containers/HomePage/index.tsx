import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Loadable';
import { Footer } from '../../components/Footer/Loadable';
import { MultiSigTransactionForm } from '../MultiSigTransactionForm';

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
        </div>
      </main>
      <Footer />
    </>
  );
}
