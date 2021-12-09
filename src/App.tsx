import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dasboard } from './components/Dasboard';
import { MakerModal } from './components/NewTransactionModal';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransaction={handleNewTransactionModalOpen} />
      <Dasboard />
      <MakerModal
        onNewTransactionModalOpen={isNewTransactionModalOpen}
        onNewTransactionModalClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </>
  );
}
