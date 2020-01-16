import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLOR_GRAY, FONT_SIZE_INPUT, FONT_SIZE_LABEL } from "../global/style";
import ErrorMessage from "./ErrorMessage";
import { FormButtonWrapper, FormInputWrapper, FormWrapper } from "../styled/forms";
import { ComponentWrapper, InputWrapper, LabelWrapper } from "../styled/wrappers";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

const StyledLabel = styled.label`
  width: 100%;
  font-size: ${FONT_SIZE_LABEL};
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.color || COLOR_GRAY}
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: ${FONT_SIZE_INPUT};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: ${FONT_SIZE_INPUT};
  resize: vertical;
  min-height: 70px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      value: props.value,
      savedValue: props.value,
      error: null,
    };
    this.saveAllowed = !!props.handleSubmit;
  }

  onChange(evt) {
    evt.preventDefault();

    const { name, value } = evt.target;
    const { editAllowed } = this.props;

    try {
      if(!editAllowed) {
        throw new Error("You are not allowed to edit this field");
      }

      if (this.props.handleChange) {
        this.props.handleChange({ name, value });
      }

      this.setState({
        changed: true,
        value,
        error: null,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  onSave(evt) {
    evt.preventDefault();

    if (this.state.error) return;
    if (!this.saveAllowed) return;

    const { name } = evt.target;
    const { editAllowed } = this.props;
    const { value } = this.state;

    try {
      if (!editAllowed) {
        throw new Error("You are not allowed to save this field");
      }

      if (this.props.handleSubmit) {
        this.props.handleSubmit({ name, value });
      }

      this.setState({
        changed: false,
        savedValue: value,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  onCancel(evt) {
    evt.preventDefault();

    if (!this.saveAllowed) return;

    const { savedValue } = this.state;

    this.setState({
      changed: false,
      value: savedValue,
      error: null,
    });
  }

  render() {
    const {
      type,
      label,
      name,
      placeholder,
      required,
      min,
      max,
      editAllowed,
    } = this.props;

    const {
      changed,
      value,
      error,
    } = this.state;

    const color = required && (!value || !value.length) ? "red" : null;

    return (
      <form onSubmit={this.onSave.bind(this)}>
        <FormWrapper>
          <FormInputWrapper>
            <ComponentWrapper>
              <LabelWrapper>
                <StyledLabel htmlFor={name} color={color}>
                  {label}{required && (!value || !value.length) ? " [required]" : null}
                </StyledLabel>
              </LabelWrapper>
              <InputWrapper borderColor={color}>
                {type !== "textarea" && (
                  <StyledInput
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    min={min}
                    max={max}
                    required={required}
                    disabled={!editAllowed}
                    onChange={this.onChange.bind(this)}
                    autoComplete={type === "password" ? "off" : "on"}
                  />
                )}
                {type === "textarea" && (
                  <StyledTextArea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    disabled={!editAllowed}
                    onChange={this.onChange.bind(this)}
                    autoComplete={"on"}
                  />
                )}
              </InputWrapper>
              {error && <ErrorMessage message={error}/>}
            </ComponentWrapper>
          </FormInputWrapper>
          {this.saveAllowed && editAllowed && changed && (
            <FormButtonWrapper>
              <SaveButton
                handleClick={this.onSave.bind(this)}
              />
              <CancelButton
                handleClick={this.onCancel.bind(this)}
              />
            </FormButtonWrapper>
          )}
        </FormWrapper>
      </form>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.bool,
  editAllowed: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Input;
