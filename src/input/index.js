import React from 'react';
import PropTypes from 'prop-types';
import {
  AddOnContainer,
  AffixContainer,
  Container,
  ErrorMessage,
  IconRegion,
  TextInput
} from './style';
import {
  FormatCurrency,
  ParseInteger,
  ParseIntegerOrHalf,
  ParseYear
} from '../parse';

class Input extends React.PureComponent {
  static defaultProps = {
    showError: meta => meta.error && meta.touched,
    showWarning: meta => meta.error && meta.touched
  };

  onChange = e => {
    const {
      input: { onChange }
    } = this.props;
    this.cursorBeforeChange = e.target.selectionStart;
    this.valueBeforeChange = e.target.value;
    this.target = e.target;

    setTimeout(() => {
      const valueAfterChange = this.target.value;
      const lengthDifference =
        valueAfterChange.length - this.valueBeforeChange.length;
      const newSelection = this.cursorBeforeChange + lengthDifference;
      try {
        this.target.setSelectionRange(newSelection, newSelection);
      } catch (e) {
        // Ignore
      }
    }, 0);

    onChange(e);
    return true;
  };

  render() {
    const {
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
      showError,
      showWarning,
      flexGrow,
      ...rest
    } = this.props;

    return (
      <React.Fragment>
        <Container
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

          <TextInput
            disabled={disabled}
            readOnly={readOnly}
            {...input}
            {...rest}
            onChange={this.onChange}
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
        </Container>
        {showError(meta) && <ErrorMessage>{meta.error}</ErrorMessage>}
      </React.Fragment>
    );
  }
}

export default Input;

const CurrencyAddon = () => 'R';
const Currency = {
  addOn: CurrencyAddon,
  parse: ParseInteger,
  format: FormatCurrency
};

const MetersSquared = {
  affix: () => '㎡',
  parse: ParseInteger
};

const Integer = {
  parse: ParseInteger
};

const Year = {
  parse: ParseYear
};

const IntegerOrHalf = {
  parse: ParseIntegerOrHalf
};

export {
  TextInput,
  Container as TextInputContainer,
  AddOnContainer,
  MetersSquared,
  Currency,
  Integer,
  IntegerOrHalf,
  ErrorMessage,
  Year
};

Input.propTypes = {
  input: PropTypes.object,
  addOn: PropTypes.func,
  affix: PropTypes.object,
  icon: PropTypes.object,
  addOnSm: PropTypes.bool,
  meta: PropTypes.object,
  parse: PropTypes.func,
  format: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  showError: PropTypes.func,
  showWarning: PropTypes.func,
  flexGrow: PropTypes.bool
};
