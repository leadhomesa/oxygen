import styled, { css } from 'styled-components';
import colors from '../colors';

export const FormHeader = styled.div`
  position: relative;
  padding-bottom: 18px;
`;

export const FormTitle = styled.div`
  color: ${colors.storm};
  font-size: 15px;
  font-weight: 600;
`;

export const FormHeaderSeparator = styled.div`
  background-color: ${colors.lightGallery};
  height: 1px;
  margin-top: 20px;
`;

export const FormSeparator = styled.div`
  background-color: ${colors.lightGallery};
  height: 1px;
  margin: 30px 0;
`;

export const FormField = styled.div`
  margin-bottom: 10px;
`;

export const FormFieldLabel = styled.div`
  color: ${colors.lighterStorm};
  font-size: 15px;
  margin-bottom: 5px;
`;

const HintBaseStyle = css`
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
`;

export const FormFieldHint = styled.div`
  ${HintBaseStyle}
  color: ${colors.ocean};
  opacity: ${({ stale }) => (stale ? '0.5' : '1')};
`;

export const FormFieldBottomHint = styled.div`
  color: ${colors.lightStorm};
  ${HintBaseStyle}
`;

export const FormFieldWarning = styled.div`
  color: ${colors.warning};
  ${HintBaseStyle}
`;

export const FieldSpacer = styled.div`
  height: 15px;
`;

export const ToggleFormFieldLabel = styled.div`
  color: ${colors.lighterStorm};
  padding-left: 10px;
`;

export const ToggleFormField = styled.div`
  display: flex;
  align-items: center;
`;

export const FormDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.lightGallery};
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const FormSubTitle = styled.div`
  color: ${colors.lightStorm};
  font-size: 15px;
`;
