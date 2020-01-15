import React from "react";
import SmartInput from "../components/SmartInput";

const StatefulTextArea = props => (
  <SmartInput
    {...props}
    type="textarea"
  />
);

export default StatefulTextArea;
