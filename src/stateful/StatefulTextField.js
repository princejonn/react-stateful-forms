import React from "react";
import SmartInput from "../components/SmartInput";

const StatefulTextField = props => (
  <SmartInput
    {...props}
    type="text"
  />
);

export default StatefulTextField;
