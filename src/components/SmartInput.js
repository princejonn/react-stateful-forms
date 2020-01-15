import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isFunction } from "lodash";
import { ReactComponent as SaveIcon } from "../resources/save.svg";
import { ReactComponent as CancelIcon } from "../resources/cancel.svg";
import {
  COLOR_CANCEL,
  COLOR_GRAY,
  COLOR_SAVE,
  DEFAULT_WIDTH,
  FONT_FAMILY,
} from "../global/style";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import TextArea from "./TextArea";

const StyledWrapper = styled.div`
  width: ${props => props.width || DEFAULT_WIDTH}px;
  font-family: ${FONT_FAMILY};
  color: ${COLOR_GRAY};
`;

const StyledLabelRow = styled.div`
  display: box;
`;

const StyledLabel = styled.label`
  font-size: 8pt;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledInputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid ${COLOR_GRAY};
`;

const StyledSaveButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_SAVE};
`;

const StyledCancelButton = styled.button`
  height: 25px;
  width: 25px;
  background: ${COLOR_CANCEL};
`;

const getInput = props => {
  switch (props.type) {
    case "text":
    case "number":
      return (
        <Input
          {...props}
          width={props.inputWidth}
        />
      );

    case "textarea":
      return (
        <TextArea
          {...props}
          width={props.inputWidth}
        />
      );

    default:
      return <div>erroneous input type</div>
  }
};

class SmartInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      value: this.props.value || "",
      savedValue: this.props.value || "",
      errorMessage: null,
    };
  }

  onChange(evt) {
    evt.preventDefault();

    const { name, value } = evt.target;
    const { editAllowed } = this.props;

    try {
      if (!editAllowed) {
        throw new Error("You are not allowed to edit this field");
      }

      if (!this.state.changed && isFunction(this.props.handleEditStart)) {
        this.props.handleEditStart(name);
      }

      this.setState({
        changed: true,
        errorMessage: null,
        value,
      });

      if (isFunction(this.props.handleValidation)) {
        this.props.handleValidation(name, value);
      }
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
      // throw err; // should throw and handle error in a better way
      console.error(err);
    }
  }

  onSave(evt) {
    evt.preventDefault();

    const { name } = evt.target;
    const { editAllowed } = this.props;
    const { value } = this.state;

    try {
      if (this.state.errorMessage) return;

      if (!editAllowed) {
        throw new Error("You are not allowed to edit this field");
      }

      if (isFunction(this.props.handleEditEnd)) {
        this.props.handleEditEnd(name);
      }

      if (isFunction(this.props.handleSubmit)) {
        this.props.handleSubmit(value);
      }

      this.setState({
        changed: false,
        savedValue: this.state.value,
      });
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
      // throw err; // should throw and handle error in a better way
      console.error(err);
    }
  }

  onCancel(evt) {
    evt.preventDefault();

    const { name } = evt.target;

    if (isFunction(this.props.handleEditEnd)) {
      this.props.handleEditEnd(name);
    }

    this.setState({
      changed: false,
      value: this.state.savedValue,
      errorMessage: null,
    });
  }

  render() {
    const {
      name,
      label,
      editAllowed,
      width,
    } = this.props;

    const {
      changed,
      value,
      errorMessage,
    } = this.state;

    const inputWidth = width - 70 || DEFAULT_WIDTH;

    return (
      <form onSubmit={this.onSave.bind(this)}>
        <StyledWrapper width={width}>
          <StyledLabelRow>
            <StyledLabel htmlFor={name}>
              {label}
            </StyledLabel>
          </StyledLabelRow>
          <StyledInputRow>
            {getInput({
              ...this.props,
              name,
              inputWidth,
              value,
              handleChange: this.onChange.bind(this),
            })}
            {editAllowed && changed && (
              <>
                <StyledSaveButton onClick={this.onSave.bind(this)}>
                  <SaveIcon/>
                </StyledSaveButton>
                <StyledCancelButton onClick={this.onCancel.bind(this)}>
                  <CancelIcon/>
                </StyledCancelButton>
              </>
            )}
          </StyledInputRow>
          <ErrorMessage
            message={errorMessage}
          />
        </StyledWrapper>
      </form>
    );
  }
}

SmartInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  editAllowed: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleValidation: PropTypes.func,
  handleEditStart: PropTypes.func,
  handleEditEnd: PropTypes.func,
  width: PropTypes.number,
};

export default SmartInput;
