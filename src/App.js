import React from 'react';
import { GlobalStyle } from "./global/style";
import Input from "./components/Input";
import CheckBox from "./components/CheckBox";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Input
        type={"text"}
        label={"text label"}
        name={"text name"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("text", dto);
        }}
        handleSubmit={(dto) => {
          console.log("submit", dto);
        }}
      />
      <Input
        type={"disallowed"}
        label={"disallowed label"}
        name={"disallowed name"}
        value={""}
        required={false}
        editAllowed={false}
        handleChange={(dto) => {
          console.log("disallowed", dto);
        }}
        handleSubmit={(dto) => {
          console.log("submit", dto);
        }}
      />
      <Input
        type={"number"}
        label={"number label"}
        name={"number name"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("number", dto);
        }}
      />
      <Input
        type={"textarea"}
        label={"textarea label"}
        name={"textarea name"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("textarea", dto);
        }}
      />
      <CheckBox
        label={"checkbox label"}
        name={"checkbox name"}
        value={"checkbox value"}
        required={false}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("checkbox", dto);
        }}
      />
    </div>
  );
}

export default App;
