import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as CancelIcon } from "../resources/cancel.svg";
import { COLOR_CANCEL } from "../global/style";

const StyledCancelButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_CANCEL};
`;

const CancelButton = props => (
  <StyledCancelButton onClick={props.handleClick}>
    <CancelIcon />
  </StyledCancelButton>
);

CancelButton.propTypes = {
  handleClick: PropTypes.func,
};

export default CancelButton;
