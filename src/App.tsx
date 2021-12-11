import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dasboard } from './components/Dasboard';
import { MakerModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactionContextApi';

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
    <TransactionProvider>
      <Header onOpenNewTransaction={handleNewTransactionModalOpen} />
      <Dasboard />
      <MakerModal
        onNewTransactionModalOpen={isNewTransactionModalOpen}
        onNewTransactionModalClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
