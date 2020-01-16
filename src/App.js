import React from 'react';
import { GlobalStyle } from "./global/style";
import Input from "./components/Input";
import CheckBox from "./components/CheckBox";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Input
        type={"text"}
        label={"text 1"}
        name={"text:1"}
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
        label={"disallowed"}
        name={"disallowed"}
        value={"cannot be changed"}
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
        label={"number:1"}
        name={"number:2"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("number", dto);
        }}
      />
      <Input
        type={"textarea"}
        label={"textarea 1"}
        name={"textarea:1"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("textarea change", dto);
        }}
      />
      <Input
        type={"textarea"}
        label={"textarea 2"}
        name={"textarea:2"}
        value={""}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("textarea change", dto);
        }}
        handleSubmit={(dto) => {
          console.log("select submit", dto);
        }}
      />
      <Select
        label={"select label"}
        name={"select:1"}
        required={true}
        list={[
          {
            name: "111",
            value: 111,
            selected: false,
            disabled: false,
          },
          {
            name: "222",
            value: 222,
            selected: false,
            disabled: false,
          },
        ]}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("select change", dto);
        }}
      />
      <Select
        label={"select label 2"}
        name={"select:2"}
        required={true}
        list={[
          {
            name: "ett",
            value: "ett",
            selected: false,
            disabled: false,
          },
          {
            name: "två",
            value: "två",
            selected: true,
            disabled: false,
          },
        ]}
        editAllowed={false}
        handleChange={(dto) => {
          console.log("select change", dto);
        }}
        handleSubmit={(dto) => {
          console.log("select submit", dto);
        }}
      />
      <CheckBox
        label={"checkbox 1"}
        name={"checkbox:1"}
        value={"checkbox:1"}
        checked={false}
        required={true}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("checkbox change", dto);
        }}
        handleSubmit={(dto) => {
          console.log("select submit", dto);
        }}
      />
      <CheckBox
        label={"checkbox 1"}
        name={"checkbox:2"}
        value={"checkbox:2"}
        checked={true}
        required={false}
        editAllowed={true}
        handleChange={(dto) => {
          console.log("checkbox change", dto);
        }}
        handleSubmit={(dto) => {
          console.log("select submit", dto);
        }}
      />
    </div>
  );
}

export default App;
