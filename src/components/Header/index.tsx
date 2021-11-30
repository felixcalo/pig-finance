import { Container, Content } from './styles';
import logo from '../../assets/pig-finance.png';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt='Pig finance' />
        <button type='button'>New Transaction</button>
      </Content>
    </Container>
  );
}
