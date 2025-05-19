import './dialog.css';
import { createPortal } from 'react-dom';
import React, { useRef } from 'react';
import FocusTrap from 'focus-trap-react';
import useClickOutside from '../../../hooks/ui/useClickOutside';

export default function Dialog({ title, children, onClose }) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  return (
    <>
      {createPortal(
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: '.fallback-focus',
          }}
        >
          <div className="modal-dialog" ref={modalRef}>
            <img
              src="/images/icons/whiteCrossSign.png"
              alt="white cross"
              className="close-modal-dialog"
              aria-label="close modal dialog"
              onClick={onClose}
              role="presentation"
            />
            <h3
              className="modal-dialog-title"
            >
              {title}
            </h3>
            {children}
          </div>
        </FocusTrap>,
        document.body,
      )}
    </>
  );
}
