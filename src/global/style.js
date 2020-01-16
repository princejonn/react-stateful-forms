import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const FONT_FAMILY = "Sans-Serif";

export const FONT_SIZE_INPUT = "14pt";
export const FONT_SIZE_LABEL = "9pt";
export const FONT_SIZE_LIST = "11pt";
export const FONT_SIZE_ERROR = "12pt";

export const COLOR_BORDER = "#CCCCCC";
export const COLOR_GRAY = "#222222";
export const COLOR_SAVE = "#C5E1A5";
export const COLOR_CANCEL = "#B0BEC5";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    background: none;
    outline: none;
    border: none;
    box-sizing: border-box;
  }
  
  body {
    padding: 20px;
    background: #F1F1F1;
    font-family: ${FONT_FAMILY};
    color: ${COLOR_GRAY};
  }
  
  svg {
    height: 100%;
    width: 100%;  
  }
  
  button {
    cursor: pointer;
  
    &:focus {
      outline: 0;
    }
  
    &:hover {
      transform: scale(1.1);
    }
  }
`;
