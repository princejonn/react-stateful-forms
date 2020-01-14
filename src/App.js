import React from 'react';
import SmartInput from "./forms/SmartInput";
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SmartInput
        name="smart-input"
        label="input label"
        type="text"
        value="jonn"
        editAllowed={true}
        width={400}
        onSubmit={(val) => {
          console.log("onSubmit", val);
          if (val === "throw") throw new Error("onSubmitError message");
        }}
        onChangeValidation={(val) => {
          console.log("onChangeValidation", val);
          if (val === "error") throw new Error("onChangeError message")
        }}
      />
    </div>
  );
}

export default App;
