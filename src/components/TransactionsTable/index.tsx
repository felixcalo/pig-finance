import { Container } from './style';
import { useTransactions } from '../../hooks/useTransactionContextApi';

interface Transaction {
  id?: number;
  title: string;
  value: number;
  category: string;
  date: string;
  type: string;
}
export function TransactionTable() {
  const { transactions } = useTransactions();

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
              <td
                style={{
                  color: transaction.type !== 'debit' ? '#00FA9A' : 'red',
                }}
              >
                <span>- $</span>

                {transaction.type !== 'credit'
                  ? transaction.value
                  : transaction.value}
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
