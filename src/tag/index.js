import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  CloseButton,
  CloseButtonIcon,
  Loader
} from './style';

const Tag = ({
  value,
  children,
  onRemove,
  loading,
  slim,
  dark,
  hideBorder
}) => {
  return (
    <Container hideBorder={hideBorder} dark={dark} slim={slim}>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Wrapper>
          {children}
          {onRemove && (
            <CloseButton onClick={() => onRemove(value)}>
              <CloseButtonIcon />
            </CloseButton>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

Tag.defaultProps = {
  loading: false,
  value: {}
};

Tag.propTypes = {
  onRemove: PropTypes.func,
  value: PropTypes.any,
  children: PropTypes.any,
  loading: PropTypes.bool,
  hideBorder: PropTypes.bool,
  slim: PropTypes.bool,
  dark: PropTypes.bool
};

export default Tag;
