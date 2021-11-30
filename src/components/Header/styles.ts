import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background-header);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 1rem 1rem 10rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
    cursor: pointer;
  }
  button {
    background: var(--blue);
    color: var(--white);
    padding: 0 2rem;
    border-radius: 8px;
    height: 3rem;
    border: 0px;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
