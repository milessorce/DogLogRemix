import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Portal from './Portal';

interface ModalProps {
  closeModal: any;
}

export default function Modal({ closeModal }: ModalProps) {
  const modalContainerRef = useRef<HTMLDivElement>(null!);
  const handleKeydown = useCallback((event: React.KeyboardEvent) => {
    // @ts-ignore
    event.code === 'Escape' && closeModal();
  }, [ closeModal ]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modalContainerRef.current.addEventListener('click', event => {
      if (event.target === modalContainerRef.current) {
        closeModal();
      }
    });
    // @ts-ignore
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.style.overflow = '';
      // @ts-ignore
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [ closeModal ]);

  return (
    <>
      <Portal id="modal-root">
        <div
          className="modal"
          tabIndex={ -1 }
          role="dialog"
          ref={ modalContainerRef }
        >
          <div className="modal__content-container" role="document">
            <div className="modal__content">
              <h2 className="modal__heading">Thanks for subscribing to the DogLog newsletter. Stay tuned!</h2>
              <img
                className="modal__photo"
                src="https://res.cloudinary.com/dyrrwpemp/image/upload/f_auto/DogLog/cali_happy.jpg"
                aria-hidden="true"
              />
              <p className="modal__paragraph">
                In the meantime, check out our <Link to="/blog">blog</Link>.
              </p>
            </div>
          </div>
        </div>
      </Portal>
      <Portal id="modal-backdrop-root">
        <div className="modal__backdrop" />
      </Portal>
    </>
  );
}