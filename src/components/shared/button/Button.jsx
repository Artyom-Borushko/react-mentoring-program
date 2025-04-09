import './button.css';
import React from "react";

export default function Button({type, children, onClick}) {

    return (
        <button
            type={type}
            className={`button ${type}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
