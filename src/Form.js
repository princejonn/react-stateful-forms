import React, { Component } from "react";
import Input from "./components/Input";
// import Select from "./components/Select";
import CheckBox from "./components/CheckBox";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async handleChange({ name, value }) {
    console.log("change", name, value);
    this.setState({ [name]: value });
  }

  async handleCheck({ name, value, check }) {
    console.log("check", name, value, check);
    this.setState({ [name]: check });
  }

  async handleSubmit({ name, value }) {
    console.log("submit", name, value);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Input
          label={"text 1"}
          name={"text:1"}
          type={"text"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Input
          label={"disallowed 1"}
          name={"disallowed:1"}
          type={"text"}
          value={"cannot be changed"}
          required={false}
          editAllowed={false}
          handleChange={this.handleChange.bind(this)}
        />
        <Input
          label={"number 1"}
          name={"number:1"}
          type={"number"}
          value={""}
          min={0}
          max={10}
          required={true}
          editAllowed={true}
          handleChange={this.handleChange.bind(this)}
        />
        <Input
          label={"textarea 1"}
          name={"textarea:1"}
          type={"textarea"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Input
          label={"textarea 2"}
          name={"textarea:2"}
          type={"textarea"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={this.handleChange.bind(this)}
        />
        {/*<Select*/}
        {/*  label={"select 1"}*/}
        {/*  name={"select:1"}*/}
        {/*  required={true}*/}
        {/*  list={[*/}
        {/*    {*/}
        {/*      name: "111",*/}
        {/*      value: 111,*/}
        {/*      selected: false,*/}
        {/*      disabled: false,*/}
        {/*    },*/}
        {/*    {*/}
        {/*      name: "222",*/}
        {/*      value: 222,*/}
        {/*      selected: false,*/}
        {/*      disabled: false,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  editAllowed={true}*/}
        {/*  handleChange={({ name, value }) => {*/}
        {/*    this.setState({ [name]: value });*/}
        {/*    console.log(this.state);*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Select*/}
        {/*  label={"select label 2"}*/}
        {/*  name={"select:2"}*/}
        {/*  required={true}*/}
        {/*  list={[*/}
        {/*    {*/}
        {/*      name: "ett",*/}
        {/*      value: "ett",*/}
        {/*      selected: false,*/}
        {/*      disabled: false,*/}
        {/*    },*/}
        {/*    {*/}
        {/*      name: "två",*/}
        {/*      value: "två",*/}
        {/*      selected: true,*/}
        {/*      disabled: false,*/}
        {/*    },*/}
        {/*  ]}*/}
        {/*  editAllowed={false}*/}
        {/*  handleChange={({ name, value }) => {*/}
        {/*    this.setState({ [name]: value });*/}
        {/*    console.log(this.state);*/}
        {/*  }}*/}
        {/*/>*/}
        <CheckBox
          label={"checkbox 1"}
          name={"checkbox:1"}
          value={"checkbox:1"}
          checked={false}
          required={true}
          editAllowed={true}
          handleCheck={this.handleCheck.bind(this)}
        />
        <CheckBox
          label={"checkbox 2"}
          name={"checkbox:2"}
          value={"checkbox:2"}
          checked={true}
          required={false}
          editAllowed={true}
          handleCheck={this.handleCheck.bind(this)}
        />
      </div>
    );
  }
}

export default Form;
