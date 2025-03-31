import React, { useState, useRef, useEffect } from "react";
import '../styles/optionsSelector.css';

export default function OptionsSelector({movieDropdownOptions, onDropdownSelection}) {
    const [isOptionsDropdownVisible, setOptionsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setOptionsDropdownVisible(!isOptionsDropdownVisible);
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
                src={'images/options-selector/threeDotsExpandOptionsIcon.png'}
                alt='expand options'
                className={'movie-expand-options-icon'}
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
                    {movieDropdownOptions.map((dropdownOption, index) => {
                        return (
                            <div
                                key={index}
                                className={'dropdown-option'}
                                onClick={onDropdownSelection}
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
