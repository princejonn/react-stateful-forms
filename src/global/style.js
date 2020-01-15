import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const FONT_FAMILY = "Sans-Serif";
export const FONT_SIZE = 14;

export const COLOR_GRAY = "#222222";
export const COLOR_SAVE = "#C5E1A5";
export const COLOR_CANCEL = "#B0BEC5";

export const DEFAULT_HEIGHT = 25;
export const DEFAULT_WIDTH = 300;

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
    background: #fff;
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
