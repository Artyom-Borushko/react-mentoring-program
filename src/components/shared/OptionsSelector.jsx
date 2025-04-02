import React, { useState, useRef, useEffect } from "react";
import './optionsSelector.css';

export default function OptionsSelector({dropdownOptions, onDropdownSelection, controlImageSrc, controlSource = ''}) {
    const [isOptionsDropdownVisible, setOptionsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setOptionsDropdownVisible(!isOptionsDropdownVisible);
    };

    const handleDropdownSelect = (event) => {
        toggleDropdown();
        onDropdownSelection(event);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOptionsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <img
                src={controlImageSrc}
                alt='expand options'
                className={`movie-expand-options-icon ${controlSource}`}
                aria-label={'expand options'}
                onClick={toggleDropdown}
            />

            {isOptionsDropdownVisible && (
                <div className="dropdown">
                    <img
                        src="/images/options-selector/whiteCrossSign.png"
                        alt="white cross"
                        className={'close-dropdown'}
                        aria-label={'close dropdown'}
                        onClick={toggleDropdown}
                    />
                    {dropdownOptions.map((dropdownOption, index) => {
                        return (
                            <div
                                key={index}
                                className={'dropdown-option'}
                                onClick={handleDropdownSelect}
                            >
                                {dropdownOption}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};
