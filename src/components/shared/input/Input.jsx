import './input.css';
import React, {useState} from "react";
import Button from "../button/Button";

export default function Input({labelText, id, type, initialValue = '', dropdownOptions = [], ref, dropdownOpenerText = ''}) {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setShowDropdown(!showDropdown);
    };

    switch (type) {
        case 'checkbox':
            return (
                <div className={'input-field'}>
                    {/*TODO - probably can modify and reuse already existing OptionsSelector to work with checkboxes*/}
                    <Button
                        type={'dropdown-opener'}
                        onClick={toggleDropdown}
                    >
                        {dropdownOpenerText}
                    </Button>
                    {showDropdown && dropdownOptions.map((option) => (
                        <label key={option}>
                            <input
                                id={id}
                                type={type}
                                name={id}
                                defaultValue={option}
                                ref={ref}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )
        case 'textarea':
            return (
                <div className={'input-field textarea'}>
                    <label
                        htmlFor={id}
                    >
                        {labelText}
                    </label>
                    <textarea
                        className={type}
                        id={id}
                        name={id}
                        defaultValue={initialValue}
                        ref={ref}
                    >
                    </textarea>
                </div>
            )
        default:
            return (
                <div className={'input-field'}>
                    <label
                        htmlFor={id}
                    >
                        {labelText}
                    </label>
                    <input
                        className={labelText.toLowerCase()}
                        type={type}
                        id={id}
                        name={id}
                        defaultValue={initialValue}
                        ref={ref}
                    />
                </div>
            )
    }
}
