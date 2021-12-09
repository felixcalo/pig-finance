import { Container, Content } from './styles';
import logo from '../../assets/pig-finance.png';

interface HeaderProps {
  onOpenNewTransaction: () => void;
}

export function Header({ onOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt='Pig finance' />
        <button type='button' onClick={onOpenNewTransaction}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
