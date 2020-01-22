import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLOR_GRAY, FONT_SIZE_LIST } from "../global/style";
import ErrorMessage from "./ErrorMessage";
import { ComponentWrapper } from "../styled/wrappers";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  padding-left: 5px;
  font-size: ${FONT_SIZE_LIST};
  color: ${props => props.color || COLOR_GRAY}
`;

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      error: null,
    };
  }

  onCheck(evt) {
    const { name, value, checked } = evt.target;
    const { editAllowed } = this.props;

    if (!editAllowed) {
      this.setState({ error: "You are not allowed to edit this field" });
    }

    this.setState({
      checked,
      error: null,
    });

    if (!this.props.handleCheck) return;

    this.props.handleCheck({ name, value, checked })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  render() {
    const {
      label,
      name,
      value,
      required,
    } = this.props;

    const {
      checked,
      error,
    } = this.state;

    const id = `${name}:${value}`;
    const color = required && !checked ? "red" : null;

    return (
      <ComponentWrapper>
        <StyledWrapper>
          <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={this.onCheck.bind(this)}
          />
          <StyledLabel htmlFor={id} color={color}>
            {label}{required && "*"}
          </StyledLabel>
        </StyledWrapper>
        {error && <ErrorMessage message={error} />}
      </ComponentWrapper>
    );
  }
}

CheckBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  editAllowed: PropTypes.bool,
  handleCheck: PropTypes.func,
};

export default CheckBox;
