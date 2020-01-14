import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const DEFAULT_FONT_SIZE = 8;

const LabelRow = styled.div`
  display: box;
`;

const LabelField = styled.label`
  font-size: ${props => props.fontSize || DEFAULT_FONT_SIZE}pt;
  font-weight: bold;
  text-transform: uppercase;
`;

const Label = props => (
  <LabelRow>
    <LabelField
      htmlFor={props.name}
      fontSize={props.fontSize}
    >
      {props.label}
    </LabelField>
  </LabelRow>
);

Label.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Label;
