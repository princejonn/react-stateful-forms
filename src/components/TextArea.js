import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, FONT_SIZE } from "../global/style";

const StyledTextArea = styled.textarea`
  height: ${DEFAULT_HEIGHT * 2}px;
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-size: ${FONT_SIZE}pt;
  resize: vertical;
`;

const TextArea = props => (
  <StyledTextArea
    autoComplete="on"
    id={props.name}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    required={props.required}
    min={props.min}
    max={props.max}
    onChange={props.handleChange}
    width={props.width}
  />
);

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  handleChange: PropTypes.func,
  width: PropTypes.number,
};

export default TextArea;
