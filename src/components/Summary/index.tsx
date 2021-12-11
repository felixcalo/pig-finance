import { Container } from './style';
import { Card } from '../Card/index';
import inImg from '../../assets/income.svg';
import outImg from '../../assets/outcome.svg';
import totalImg from '../../assets/pngwing.png';
import { useTransactions } from '../../hooks/useTransactionContextApi';

export function Summary() {
  const { transactions } = useTransactions();

  const totalCredit = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'credit') {
      return transaction.value + acc;
    }
    return acc;
  }, 0);
  const totalDebit = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'debit') {
      return transaction.value + acc;
    }
    return acc;
  }, 0);

  const TotalAmount = totalCredit - totalDebit;

  return (
    <Container>
      <Card icon={inImg} sold={totalCredit} title='Credit'></Card>
      <Card icon={outImg} sold={totalDebit} title='Debit'></Card>
      <Card sold={TotalAmount} icon={totalImg} title='Solde'></Card>
    </Container>
  );
}
