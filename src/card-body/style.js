import styled from 'styled-components';
import colors from '../colors';

export const BodyMeta = styled.div`
  background: linear-gradient(360deg, transparent 0, rgba(59, 59, 87, 0.8));
  padding: 20px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
`;

export const BodyData = styled.div`
  align-items: flex-end;
  background: linear-gradient(180deg, transparent 0, rgba(59, 59, 87, 0.8));
  display: flex;
  flex-direction: row;
  font-size: 1em;
  justify-content: space-between;
  padding: 0 20px 20px;
  width: 100%;
`;

export const BodyPrice = styled.div`
  flex-grow: 1;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const BodyDescription = styled.div`
  flex-grow: 1;
  text-align: right;
`;

export default styled.div`
  align-items: center;
  background-size: cover;
  background-image: url('${({ image }) => image}');
  background-position: center center;
  background-repeat: no-repeat;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  flex-grow: 9;
  justify-content: space-between;
  width: 100%;
`;
