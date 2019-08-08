import styled from 'styled-components';
import colors from '../colors';

import Link from '../link';
import { ReactComponent as LeadhomeSVG } from '../../assets/leadhome-logo.svg';
import { ReactComponent as SmallLeadhomeSVG } from '../../assets/leadhome-logo-small.svg';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  background-color: ${colors.darkStorm};
  color: ${colors.white};
`;

// this hides the Leadhome text on mobile
export const LeadhomeLogo = styled(LeadhomeSVG)`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const SmallLeadhomeLogo = styled(SmallLeadhomeSVG)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 1rem;
`;
