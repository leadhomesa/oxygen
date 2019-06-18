import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AddOnContainer,
  AffixContainer,
  Container as InputContainer,
  ErrorMessage,
  IconRegion,
  TextInput
} from '../input/style';
import Tag from '../tag';
import { Container, SuggestionList, SuggestionItem } from './style';

const getValue = val => {
  if (val && Array.isArray(val) && val.length > 0) return [...val];
  return [];
};

const Autocomplete = ({
  suggestions = [],
  addOn: AddOn,
  affix: Affix,
  icon: Icon,
  addOnSm,
  input,
  meta = {},
  parse,
  format,
  disabled,
  readOnly,
  flexGrow,
  allowCustomInput,
  ...rest
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const [list, setList] = useState(getValue(input?.value));
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const inputEl = useRef(null);

  const onChange = e => {
    const val = e.target.value || '';
    if (val === '') setSelectedIndex(0);
    setQuery(val);
    setFilteredSuggestions(
      [...suggestions].filter(
        suggestion => suggestion.includes(val) && !list.includes(suggestion)
      )
    );
  };

  const changeSelectedIndex = keyCode => {
    if (keyCode === 38 && selectedIndex > 0) {
      // up
      setSelectedIndex(selectedIndex - 1);
    } else if (
      keyCode === 40 &&
      selectedIndex < filteredSuggestions.length - 1
    ) {
      // down
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const addToList = keyCode => {
    const { onChange: changeFormValue } = input;
    if (changeFormValue && selectedIndex >= 0) {
      const selectedVal = filteredSuggestions[selectedIndex];
      let newList = [...list];
      if (!selectedVal && allowCustomInput) {
        newList = [...newList, query];
      } else if (selectedVal) {
        newList = [...newList, selectedVal];
      }
      if (!list.includes(selectedVal)) setList(newList);
      changeFormValue(newList);
      setFilteredSuggestions([
        ...suggestions.filter(suggestion => !newList.includes(suggestion))
      ]);
    }
    setQuery('');
  };

  const onKeyDown = e => {
    const { onChange: changeFormValue } = input;
    const { keyCode } = e;
    if (keyCode) {
      if (keyCode === 13 || keyCode === 9) addToList(keyCode);
      if (keyCode === 38 || keyCode === 40) changeSelectedIndex(keyCode);
      if (keyCode === 8 && list.length > 0 && query === '') {
        let tmpList = [...list];
        tmpList.splice(-1, 1);
        setList(tmpList);
        changeFormValue(tmpList);
      }
    }
  };

  const removeItem = position => () => {
    const { onChange: changeFormValue } = input;
    let newList = [...list].filter((item, index) => index !== position);
    setList(newList);
    changeFormValue(newList);
  };

  const showError = meta => meta.error && meta.touched;
  const showWarning = meta => meta.error && meta.touched;

  useEffect(() => {
    if (inputEl.current) {
      const pos = inputEl.current.getBoundingClientRect();
      setTopOffset(pos.top + 5);
      setLeftOffset(pos.left + 5);
    }
  }, [inputEl, list]);

  return (
    <Container>
      <InputContainer
        warning={showWarning(meta)}
        active={meta.active}
        disabled={disabled}
        flexGrow={flexGrow}
      >
        {AddOn && (
          <AddOnContainer sm={addOnSm}>
            <AddOn />
          </AddOnContainer>
        )}

        {list.map((item, index) => (
          <Tag slim onRemove={removeItem(index)} key={`item-${index}`}>
            {item}
          </Tag>
        ))}

        <TextInput
          disabled={disabled}
          readOnly={readOnly}
          {...input}
          {...rest}
          onChange={onChange}
          value={query}
          onKeyDown={onKeyDown}
          ref={inputEl}
        />

        {Affix && (
          <AffixContainer sm={addOnSm}>
            <Affix />
          </AffixContainer>
        )}

        {Icon && (
          <IconRegion>
            <Icon />
          </IconRegion>
        )}
      </InputContainer>
      {showError(meta) && <ErrorMessage>{meta.error}</ErrorMessage>}
      {filteredSuggestions.length > 0 && query !== '' && (
        <SuggestionList top={topOffset} left={leftOffset}>
          {filteredSuggestions.map((suggestion, index) => (
            <SuggestionItem
              selected={index === selectedIndex}
              key={`suggestion${index}`}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </Container>
  );
};

export default Autocomplete;

Autocomplete.propTypes = {
  input: PropTypes.object,
  addOn: PropTypes.func,
  affix: PropTypes.object,
  icon: PropTypes.object,
  addOnSm: PropTypes.bool,
  allowCustomInput: PropTypes.bool,
  meta: PropTypes.object,
  parse: PropTypes.func,
  format: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  showError: PropTypes.func,
  showWarning: PropTypes.func,
  flexGrow: PropTypes.bool,
  multiple: PropTypes.bool,
  suggestions: PropTypes.shape({
    [name]: PropTypes.string
  }).isRequired
};
