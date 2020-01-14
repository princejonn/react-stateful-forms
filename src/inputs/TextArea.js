import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DEFAULT_HEIGHT = 50;
const DEFAULT_WIDTH = 300;
const DEFAULT_FONT_SIZE = 14;

const TextAreaField = styled.textarea`
  height: ${props => props.height || DEFAULT_HEIGHT}px;
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}pt;
  resize: vertical;
`;

const TextArea = props => (
  <TextAreaField
    id={props.name}
    name={props.name}
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
    autoComplete="on"
  />
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  autoFoxus: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  fontSize: PropTypes.number,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
};

export default TextArea;
