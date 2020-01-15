import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledErrorMessage = styled.div`
  padding-top: 5px;
  padding-left: 5px;
  font-size: 10pt;
  color: red;
`;

const ErrorMessage = props => (
  <StyledErrorMessage>
    {props.message}
  </StyledErrorMessage>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
