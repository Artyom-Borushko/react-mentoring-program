import './dialog.css';
import { createPortal } from 'react-dom';
import React from "react";

export default function Dialog({title, children, onClose}) {

    return (
        <>
            {createPortal(
                <div className={'modal-dialog'}>
                    <img
                        src="/images/icons/whiteCrossSign.png"
                        alt="white cross"
                        className={'close-modal-dialog'}
                        aria-label={'close modal dialog'}
                        onClick={onClose}
                    />
                    <h3
                        className={'modal-dialog-title'}
                    >
                        {title}
                    </h3>
                    {children}
                </div>,
                document.body
            )}
        </>
    )
}
