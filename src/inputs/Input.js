import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DEFAULT_HEIGHT = 25;
const DEFAULT_WIDTH = 300;
const DEFAULT_FONT_SIZE = 14;

const InputField = styled.input`
  height: ${props => props.height || DEFAULT_HEIGHT}px;
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}pt;
`;

const Input = props => (
  <InputField
    id={props.name}
    name={props.name}
    type={props.type}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
    min={props.min}
    max={props.max}
    autoFoxus={props.autoFocus}
    height={props.height}
    width={props.width}
    fontSize={props.fontSize}
    onChange={props.onChange}
    onBlur={props.onBlur}
    autoComplete={props.type === 'password' ? 'off' : 'on'}
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
  autoFoxus: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  fontSize: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
