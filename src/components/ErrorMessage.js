import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FONT_SIZE_ERROR } from "../global/style";

const StyledErrorMessage = styled.div`
  display: box;
  padding: 5px;
  font-size: ${FONT_SIZE_ERROR};
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
