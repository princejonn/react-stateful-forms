import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, FONT_SIZE } from "../global/style";

const StyledInput = styled.input`
  height: ${DEFAULT_HEIGHT}px;
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-size: ${FONT_SIZE}pt;
`;

const Input = props => (
  <StyledInput
    autoComplete={props.type === 'password' ? 'off' : 'on'}
    id={props.name}
    name={props.name}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
    min={props.min}
    max={props.max}
    onChange={props.handleChange}
    width={props.width}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  handleChange: PropTypes.func,
  width: PropTypes.number,
};

export default Input;
