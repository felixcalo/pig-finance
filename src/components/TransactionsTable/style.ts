import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 1rem 1rem 10rem;

  margin: 0 auto;

  table {
    width: 100%;
    border-spacing: 0rem 0.5rem;
    color: grey;
  }
  th {
    font-weight: 400;
    text-align: left;
    padding: 1rem 2rem;
  }
  td {
    /* background: var(--white); */
    background: var(--grey-light);

    padding: 1rem 2rem;
    border-radius: 0.25rem;
  }
  tr {
    transition: ease 0.4s;
  }
  tr:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
