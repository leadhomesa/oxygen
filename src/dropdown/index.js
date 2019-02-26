import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownContainer,
  SelectedOption,
  Options,
  Option,
  ArrowIcon
} from './style';

const Dropdown = ({ options, input }) => {
  const [dropdownOpen, toggleDropdown] = useState(false);
  const [selectedValue, updateSelectedValue] = useState(input.value);

  const optionKeys = Object.keys(options);

  useEffect(() => {
    input.onChange(selectedValue);
  });

  return (
    <DropdownContainer onClick={() => toggleDropdown(!dropdownOpen)}>
      <SelectedOption>
        {options[selectedValue]}
        <ArrowIcon open={dropdownOpen} />
      </SelectedOption>
      <Options visible={dropdownOpen}>
        {optionKeys.map(key => {
          return (
            <Option
              onClick={() => updateSelectedValue(key)}
              key={key}
              active={key === selectedValue}
            >
              {options[key]}
            </Option>
          );
        })}
      </Options>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  options: PropTypes.shape({
    [name]: PropTypes.string
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string.isRequired
  })
};

export default Dropdown;
