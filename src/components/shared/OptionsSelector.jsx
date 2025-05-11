import React, {useState, useRef, useCallback} from "react";
import './optionsSelector.css';
import {useClickOutside} from "../../hooks/ui/useClickOutside";

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

    const clickOutsideHandler = useCallback(() => {
        setOptionsDropdownVisible(false);
    }, []);

    useClickOutside(dropdownRef, clickOutsideHandler);

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
                        src="/images/icons/whiteCrossSign.png"
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
}
