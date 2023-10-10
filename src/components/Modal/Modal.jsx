import { useEffect } from 'react';
import StyledModal from './Modal.styled';

const Modal = ({ onCloseModal, modalData }) => {
  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onCloseModal]);
  return (
    <StyledModal className="overlay" onClick={onOverlayClick}>
      <div className="modal">
        <h2>Modal</h2>
        <p>{modalData}</p>
        <button className="closeModalBtn" onClick={onCloseModal}>
          Close
        </button>
      </div>
    </StyledModal>
  );
};

export default Modal;
