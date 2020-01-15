import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { isFunction } from "lodash";
import { COLOR_GRAY, FONT_FAMILY, FONT_SIZE } from "../global/style";
import ErrorMessage from "../components/ErrorMessage";
import CheckBox from "../components/CheckBox";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: ${FONT_FAMILY};
  color: ${COLOR_GRAY};
`;

const StyledLabel = styled.label`
  padding-left: 5px;
  font-size: ${FONT_SIZE}pt;
`;

class SmartCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      errorMessage: null,
    };
  }

  onChange(evt) {
    const { name, value } = evt.target;
    const { editAllowed } = this.props;

    try {
      if (!editAllowed) {
        throw new Error("You are not allowed to edit this field");
      }

      if (isFunction(this.props.handleChange)) {
        this.props.handleChange(name, value, this.state.checked);
      }

      this.setState({
        checked: evt.target.checked,
      });
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
      // throw err; // should throw and handle error in a better way
      console.error(err);
    }
  }

  render() {
    const {
      name,
      value,
      label,
    } = this.props;

    const { checked, errorMessage } = this.state;

    const id = `${name}-${value}`;

    return (
      <StyledWrapper>
        <CheckBox
          id={id}
          name={name}
          value={value}
          checked={checked}
          handleChange={this.onChange.bind(this)}
        />
        <StyledLabel htmlFor={id}>
          {label}
        </StyledLabel>
        <ErrorMessage
          message={errorMessage}
        />
      </StyledWrapper>
    );
  }
}

SmartCheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default SmartCheckBox;
