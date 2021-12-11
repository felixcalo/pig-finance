import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

interface Transaction {
  id?: number;
  title: string;
  value: number;
  category: string;
  date: string;
  type: string;
}
interface TransactionContextProps {
  children: ReactNode;
}
interface TransactionDataProps {
  transactions: Transaction[];
  createTransaction: (transaction: Transaction) => Promise<void>;
}

export const TransactionContext = createContext<TransactionDataProps>(
  {} as TransactionDataProps
);

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transaction')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: Transaction) {
    const response = await api.post('/transaction', transaction);
    const data = response.data;
    setTransactions([...transactions, data.transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  return context;
}
