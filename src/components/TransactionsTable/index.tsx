import { useEffect, useState } from 'react';
import { Container } from './style';
import { api } from '../../services/api';

interface Transaction {
  id?: number;
  title: string;
  value: number;
  category: string;
  date: string;
}
export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get('/transaction')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td style={{ color: transaction.value > 0 ? '#00FA9A' : 'red' }}>
                $ {transaction.value}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
