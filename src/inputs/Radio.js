import React from "react";
import PropTypes from "prop-types";

const Radio = props => (
  <div>
    <label htmlFor={`${props.name}-${props.value}`}>{props.label}</label>
    <input
      type='radio'
      id={`${props.name}-${props.value}`}
      value={props.value}
      name={props.name}
      checked={props.checked}
      onClick={props.handleChange}
    />
  </div>
);

Radio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Radio;
