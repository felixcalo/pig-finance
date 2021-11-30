import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dasboard } from './components/Dasboard';

export function App() {
  return (
    <>
      <Header />
      <Dasboard />
      <GlobalStyle />
    </>
  );
}
