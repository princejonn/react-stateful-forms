import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as SaveIcon } from "../resources/save.svg";
import { COLOR_SAVE } from "../global/style";

const StyledSaveButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_SAVE};
`;

const SaveButton = props => (
  <StyledSaveButton onClick={props.handleClick}>
    <SaveIcon />
  </StyledSaveButton>
);

SaveButton.propTypes = {
  handleClick: PropTypes.func,
};

export default SaveButton;
