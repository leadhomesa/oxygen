import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader as Header, Step, Crumbs } from './style';

const HeaderWithBreadcrumbs = ({
  className,
  crumbs,
  activeIndex,
  logoLink,
  children
}) => {
  return (
    <Header className={className} logoLink={logoLink}>
      {children}
      <Crumbs>
        {crumbs.map((crumb, index) => (
          <Step
            key={crumb}
            completed={index < activeIndex}
            active={index === activeIndex}
          >
            {crumb}
          </Step>
        ))}
      </Crumbs>
    </Header>
  );
};

HeaderWithBreadcrumbs.defaultProps = {
  className: null,
  activeIndex: 0,
  logoLink: '/'
};

HeaderWithBreadcrumbs.propTypes = {
  className: PropTypes.string,
  crumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number,
  logoLink: PropTypes.string,
  children: PropTypes.node
};

export default HeaderWithBreadcrumbs;
