import './button.css';
import React from "react";

export default function Button({type, children, onClick, disabled, classNames}) {

    return (
        <button
            type={type}
            className={`button ${type} ${disabled ? 'disabled' : ''} ${classNames || ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
