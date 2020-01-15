import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCheckBox = styled.input``;

const CheckBox = props => (
  <StyledCheckBox
    type="checkbox"
    id={props.id}
    name={props.name}
    value={props.value}
    checked={props.checked}
    onChange={props.handleChange}
  />
);

CheckBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default CheckBox;
