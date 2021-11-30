import { CardLayout, Header, Content } from './style';

interface Card {
  title: string;
  sold: number;
  icon?: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Card(props: Card) {
  return (
    <CardLayout>
      <Header>
        <h4>{props.title}</h4>
        <img src={props.icon} alt='' />
      </Header>
      <Content>
        <span>$</span> {props.sold}
      </Content>
    </CardLayout>
  );
}
