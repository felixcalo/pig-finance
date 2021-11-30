import { Container } from './style';
import { Card } from '../Card/index';
import inImg from '../../assets/income.svg';
import outImg from '../../assets/outcome.svg';
import totalImg from '../../assets/pngwing.png';

export function Summary() {
  return (
    <Container>
      <Card icon={inImg} sold={1234.3} title='Credit'></Card>
      <Card icon={outImg} sold={-1234.15} title='Debit'></Card>
      <Card sold={1234.02} icon={totalImg} title='Total'></Card>
    </Container>
  );
}
