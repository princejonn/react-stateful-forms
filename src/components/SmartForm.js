import React, { Component } from "react";
import PropTypes from "prop-types";

class SmartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false,
      errorMessage: null,
      value: this.props.value || "",
      savedValue: this.props.value || "",
    };
  }

  onChange(evt) {
    evt.preventDefault();

    if (!this.state.changed) {
      this.props.onEditStarted(this.props.name);
    }

    try {
      const { value } = evt.target;

      this.setState({
        changed: true,
        errorMessage: null,
        value,
      });

      this.props.onChangeValidation(value);
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
      throw err;
    }
  }

  onSave(evt) {
    evt.preventDefault();

    try {
      if (this.state.errorMessage) return;

      this.props.onEditEnded(this.props.name);
      this.props.onSubmit(this.state.value);

      this.setState({
        changed: false,
        savedValue: this.state.value,
      });
    } catch (err) {
      this.setState({
        errorMessage: err.message,
      });
      throw err;
    }
  }

  onCancel(evt) {
    evt.preventDefault();

    this.props.onEditEnded(this.props.name);

    this.setState({
      changed: false,
      value: this.state.savedValue,
      errorMessage: null,
    });
  }

  render() {
    return <div>this is an abstract class</div>;
  }
}

SmartForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeValidation: PropTypes.func,
  onEditStarted: PropTypes.func,
  onEditEnded: PropTypes.func,
};

export default SmartForm;
