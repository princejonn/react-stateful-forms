import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { find } from "lodash";
import { COLOR_BORDER, COLOR_GRAY, FONT_SIZE_INPUT, FONT_SIZE_LABEL } from "../global/style";
import { ComponentWrapper, LabelWrapper } from "../styled/wrappers";
import ErrorMessage from "./ErrorMessage";

const SELECT_ONE = "SELECT_ONE";

const StyledSelect = styled.select`
  height: 35px;
  width: 100%;
  font-size: ${FONT_SIZE_INPUT};
  border: 1px solid ${props => props.borderColor || COLOR_BORDER};
  background: #FFFFFF;
`;

const StyledLabel = styled.label`
  width: 100%;
  font-size: ${FONT_SIZE_LABEL};
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.color || COLOR_GRAY}
`;

class Select extends Component {
  constructor(props) {
    super(props);
    const selected = find(props.list, { selected: true });
    this.state = {
      list: props.list,
      value: selected && selected.value,
      error: null,
    };
  }

  onChange(evt) {
    const { name, value } = evt.target;
    const { editAllowed } = this.props;

    try {
      if (!editAllowed) {
        throw new Error("You are not allowed to edit this field");
      }

      if (this.props.handleChange) {
        this.props.handleChange({ name, value });
      }

      if (this.props.handleSubmit) {
        this.props.handleSubmit({ name, value });
      }

      this.setState({
        value,
        error: null,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }

    this.setState({ value });
  }

  render() {
    const {
      label,
      name,
      required,
      editAllowed,
    } = this.props;

    const {
      list,
      value,
      error,
    } = this.state;

    const color = required && (!value || value === SELECT_ONE) ? "red" : null;

    return (
      <ComponentWrapper>
        <LabelWrapper>
          <StyledLabel htmlFor={name} color={color}>
            {label}{required && (!value || !value.length) ? " [required]" : null}
          </StyledLabel>
        </LabelWrapper>
        <StyledSelect
          id={name}
          name={name}
          value={value}
          defaultValue={SELECT_ONE}
          borderColor={color}
          disabled={!editAllowed}
          onChange={this.onChange.bind(this)}
        >
          <option
            value={SELECT_ONE}
          >
            select one
          </option>
          {list.map(item => (
            <option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.name}
            </option>
          ))}
        </StyledSelect>
        {error && <ErrorMessage message={error} />}
      </ComponentWrapper>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array,
  required: PropTypes.bool,
  editAllowed: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default Select;
