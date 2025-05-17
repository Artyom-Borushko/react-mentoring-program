import React, { useState, useRef, useCallback } from 'react';
import './optionsSelector.css';
import useClickOutside from '../../hooks/ui/useClickOutside';

export default function OptionsSelector({
  dropdownOptions, onDropdownSelection, controlImageSrc, controlSource = '',
}) {
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
        alt="expand options"
        className={`movie-expand-options-icon ${controlSource}`}
        aria-label="expand options"
        onClick={toggleDropdown}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleDropdown();
          }
        }}
      />

      {isOptionsDropdownVisible && (
        <div className="dropdown">
          <img
            src="/images/icons/whiteCrossSign.png"
            alt="white cross"
            className="close-dropdown"
            aria-label="close dropdown"
            onClick={toggleDropdown}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleDropdown();
              }
            }}
          />
          {dropdownOptions.map((dropdownOption, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="dropdown-option"
              onClick={handleDropdownSelect}
              role="presentation"
            >
              {dropdownOption}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
