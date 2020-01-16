import styled from "styled-components";
import { COLOR_BORDER } from "../global/style";

export const ComponentWrapper = styled.div`
  display: box;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid ${props => props.borderColor || COLOR_BORDER};
  background: #FFFFFF;
`;
