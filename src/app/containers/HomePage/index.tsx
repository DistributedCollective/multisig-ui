import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Loadable';
import { Footer } from '../../components/Footer/Loadable';
import { MultiSigTransactionForm } from '../MultiSigTransactionForm';
import { MultiSignConfirmTransactionForm } from '../MultiSignConfirmTransactionForm';
import { EventContainer } from '../EventContainer';

export function HomePage() {
  const [selectedTransactionId, setSelectedTransactionId] = useState('');
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
          <div className="lg:flex lg:flex-row lg:space-x-4">
            <div className="lg:w-6/12 lg:flex">
              <MultiSigTransactionForm />
            </div>
            <div className="lg:w-6/12">
              <div className="mt-5 lg:mt-0 lg:flex-grow md:flex md:flex-row md:space-x-4">
                <div className="md:w-4/12 lg:w-6/12 lg:flex">
                  <MultiSignConfirmTransactionForm
                    transactionId={selectedTransactionId}
                  />
                </div>
                <div className="mt-5 md:mt-0 md:w-8/12 lg:w-6/12 lg:flex">
                  <EventContainer onSelect={e => setSelectedTransactionId(e)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
