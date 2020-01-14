import React from "react";
import PropTypes from "prop-types";

const CheckBox = props => (
  <input
    type="checkbox"
    id={`${props.name}-${props.value}`}
    value={props.value}
    name={props.name}
    checked={props.checked}
    onChange={props.onChange}
  />
);

CheckBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
