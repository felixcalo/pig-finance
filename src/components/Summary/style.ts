import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  padding: 1rem 1rem 10rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

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
