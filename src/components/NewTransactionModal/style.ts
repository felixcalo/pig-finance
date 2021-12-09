import styled from 'styled-components';

interface ButtonCheckBoxProps {
  isActive: boolean;
}
export const Container = styled.form`
  box-sizing: border-box;
  background: #0000;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  justify-content: center;
  h2 {
    color: var(--grey);
    padding-bottom: 1.5rem;
  }
  input {
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    color: var(--grey);
    & + input {
      margin-top: 1rem;
    }
  }
  button[type='submit'] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin: 5px 0px;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: var(--blue);
    outline: none;
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    color: var(--white);
    transition: ease 0.5s;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const NewTypeTransaction = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;
export const ButtonCheckBox = styled.button<ButtonCheckBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isActive ? '#186DC3' : 'transparent')};
  height: 4rem;
  transition: ease-in-out 0.4s;
  color: ${(props) => (props.isActive ? '#fff' : 'grey')};
  outline: none;
  border: 1px solid #d7d7d7;

  border-radius: 0.25rem;
  margin: 1rem 0;

  &:hover {
    background: #f8f8f9;
    color: grey;
    filter: brightness(0.9);
  }
  img {
    padding: 0 0.25rem;
  }
`;

export const ContainerButtonClose = styled.div`
  display: flex;
  justify-content: end;
  align-items: top;

  img,
  button {
    border: 0;
  }
`;
