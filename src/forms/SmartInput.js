import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as SaveIcon } from "../resources/save.svg";
import { ReactComponent as CancelIcon } from "../resources/cancel.svg";
import SmartForm from "../components/SmartForm";
import Label from "../inputs/Label";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

const DEFAULT_HEIGHT = 25;
const DEFAULT_WIDTH = 300;

const FONT_FAMILY = "Sans-Serif";

const COLOR_GRAY = "#222222";
const COLOR_SAVE = "#C5E1A5";
const COLOR_CANCEL = "#B0BEC5";

const Wrapper = styled.div`
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-family: ${FONT_FAMILY};
  color: ${COLOR_GRAY};
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid ${COLOR_GRAY};
`;

const SaveButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_SAVE};
`;

const CancelButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_CANCEL};
`;

const ErrorMessage = styled.div`
  padding-top: 5px;
  padding-left: 5px;
  color: red;
  font-size: 10pt;
`;

const getInput = props => {
  switch (props.type) {
    case "text":
    case "number":
      return (
        <Input
          {...props}
          height={props.inputHeight}
          width={props.inputWidth}
        />
      );

    case "textarea":
      return (
        <TextArea
          {...props}
          height={props.inputHeight * 2}
          width={props.inputWidth}
        />
      );

    default:
      return <div>erroneous input type</div>
  }
};

class SmartInput extends SmartForm {
  render() {
    const {
      name,
      label,
      editAllowed,
      height,
      width,
    } = this.props;

    const {
      changed,
      value,
      errorMessage,
    } = this.state;

    const inputHeight = height || DEFAULT_HEIGHT;
    const inputWidth = width - 70 || DEFAULT_WIDTH;

    return (
      <form onSubmit={this.onSave.bind(this)}>
        <Wrapper width={width}>
          <Label
            name={name}
            label={label}
          />
          <InputRow>
            {getInput({
              ...this.props,
              name,
              inputHeight,
              inputWidth,
              value,
              onChange: this.onChange.bind(this),
            })}
            {editAllowed && changed && (
              <>
                <SaveButton onClick={this.onSave.bind(this)}>
                  <SaveIcon/>
                </SaveButton>
                <CancelButton onClick={this.onCancel.bind(this)}>
                  <CancelIcon/>
                </CancelButton>
              </>
            )}
          </InputRow>
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        </Wrapper>
      </form>
    );
  }
}

SmartInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default SmartInput;
