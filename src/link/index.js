import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';

// eslint-disable-next-line no-useless-escape
const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const Link = ({ children, href, ...rest }) => {
  const isExternal = linkRegex.test(href);

  return (
    (isExternal && (
      <a href={href} {...rest}>
        {children}
      </a>
    )) || (
      <ReactRouterLink to={href} {...rest}>
        {children}
      </ReactRouterLink>
    )
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default Link;
