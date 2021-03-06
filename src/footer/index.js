import React from 'react';
import PropTypes from 'prop-types';
import { FooterContainer } from './style';

const Footer = ({ children, ...rest }) => (
  <FooterContainer {...rest}>{children}</FooterContainer>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Footer;
