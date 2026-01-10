import ReactDOM from 'react-dom';

function Modal({ handleCloseModal, children }) {
  return ReactDOM.createPortal(
    <div className='portal-container'>
      <div onClick={handleCloseModal} className='portal-underlay' />
      {children}
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
