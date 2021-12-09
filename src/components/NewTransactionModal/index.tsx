import Modal from 'react-modal';
import {
  Container,
  NewTypeTransaction,
  ButtonCheckBox,
  ContainerButtonClose,
} from './style';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import Close from '../../assets/close.svg';
import { useState } from 'react';

interface MakerModalProps {
  onNewTransactionModalClose: () => void;
  onNewTransactionModalOpen: boolean;
}

Modal.setAppElement('#root');

export function MakerModal({
  onNewTransactionModalOpen,
  onNewTransactionModalClose,
}: MakerModalProps) {
  const [type, setType] = useState('credit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0.0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  function handleCreateNewTransaction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('Hello ' + date);
  }

  return (
    <Modal
      isOpen={onNewTransactionModalOpen}
      onRequestClose={onNewTransactionModalClose}
      contentLabel='Pig finance'
      overlayClassName='react-overlay-modal'
      className='react-content-modal'
    >
      <ContainerButtonClose>
        <button type='button' onClick={onNewTransactionModalClose}>
          <img src={Close} alt='Close modal' />
        </button>
      </ContainerButtonClose>

      <Container onSubmit={(event) => handleCreateNewTransaction(event)}>
        <h2>New transaction</h2>
        <input
          type='text'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder='Title'
        />
        <input
          type='number'
          placeholder='Value'
          min='0'
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <NewTypeTransaction>
          <ButtonCheckBox
            type='button'
            placeholder='Save'
            onClick={() => {
              setType('credit');
            }}
            isActive={type === 'credit'}
          >
            <img src={Income} alt='Credit' /> Credit
          </ButtonCheckBox>
          <ButtonCheckBox
            type='button'
            placeholder='Save'
            onClick={() => {
              setType('debit');
            }}
            isActive={type === 'debit'}
          >
            <img src={Outcome} alt='Debit' /> Debit
          </ButtonCheckBox>
        </NewTypeTransaction>
        <input
          type='text'
          placeholder='Categorie'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <input
          type='date'
          placeholder='Date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type='submit' placeholder='Save'>
          Save
        </button>
      </Container>
    </Modal>
  );
}
