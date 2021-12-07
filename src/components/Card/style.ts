import styled from 'styled-components';

export const CardLayout = styled.section`
  cursor: pointer;
  background: var(--grey-light);
  /* background: var(--white); */
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--blue);
  margin-top: -6rem;
  transition: ease 0.4s;
  &:nth-child(3) {
    background: var(--blue);
    color: var(--white);
  }

  &:hover {
    filter: brightness(0.9);
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  span {
    color: #eab676;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.strong`
  display: block;
  font-weight: 500;
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 3rem;
`;
