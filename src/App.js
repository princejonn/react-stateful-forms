import React from 'react';
import { GlobalStyle } from "./global/style";
import SmartCheckBox from "./components/SmartCheckBox";
import StatefulNumberField from "./stateful/StatefulNumberField";
import StatefulTextField from "./stateful/StatefulTextField";
import StatefulTextArea from "./stateful/StatefulTextArea";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <StatefulNumberField
        name={"number"}
        value={200}
        label={"number field"}
        editAllowed={true}
        width={400}
        handleSubmit={(name, val) => {
          console.log("onSubmit", name, val);
          if (val === "throw") throw new Error("onSubmitError message");
        }}
        handleValidation={(name, val) => {
          console.log("onChangeValidation", name, val);
          if (val === "error") throw new Error("onChangeError message")
        }}
      />
      <StatefulTextField
        name={"text"}
        value={"oskar"}
        label={"text field"}
        editAllowed={true}
        width={400}
        handleSubmit={(name, val) => {
          console.log("onSubmit", name, val);
          if (val === "throw") throw new Error("onSubmitError message");
        }}
        handleValidation={(name, val) => {
          console.log("onChangeValidation", name, val);
          if (val === "error") throw new Error("onChangeError message")
        }}
      />
      <StatefulTextArea
        name={"textarea"}
        value={"fredrik"}
        label={"text area"}
        editAllowed={true}
        width={400}
        handleSubmit={(name, val) => {
          console.log("onSubmit", name, val);
          if (val === "throw") throw new Error("onSubmitError message");
        }}
        handleValidation={(name, val) => {
          console.log("onChangeValidation", name, val);
          if (val === "error") throw new Error("onChangeError message")
        }}
      />
      <SmartCheckBox
        name={"name-1"}
        value={"value-1"}
        label={"label-1"}
        editAllowed={true}
        checked={true}
        handleChange={(name, value, checked) => {
          console.log("n:", name, "v:", value, "c:", checked);
        }}
      />
      <SmartCheckBox
        name={"name-2"}
        value={"value-2"}
        label={"label-2"}
        editAllowed={true}
        checked={true}
        handleChange={(name, value, checked) => {
          console.log("n:", name, "v:", value, "c:", checked);
        }}
      />
    </div>
  );
}

export default App;
