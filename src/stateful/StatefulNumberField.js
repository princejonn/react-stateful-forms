import React from "react";
import SmartInput from "../components/SmartInput";

const StatefulNumberField = props => (
  <SmartInput
    {...props}
    type="number"
  />
);

export default StatefulNumberField;
