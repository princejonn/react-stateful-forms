import React, { Component } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import CheckBox from "./components/CheckBox";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input
          type={"text"}
          label={"text 1"}
          name={"text:1"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
          }}
          handleSubmit={(dto) => {
            console.log("submit", dto);
            console.log(this.state);
          }}
        />
        <Input
          type={"disallowed"}
          label={"disallowed"}
          name={"disallowed"}
          value={"cannot be changed"}
          required={false}
          editAllowed={false}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
            console.log(this.state);
          }}
        />
        <Input
          type={"number"}
          label={"number:1"}
          name={"number:2"}
          value={""}
          min={0}
          max={10}
          required={true}
          editAllowed={true}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
            console.log(this.state);
          }}
        />
        <Input
          type={"textarea"}
          label={"textarea 1"}
          name={"textarea:1"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
            console.log(this.state);
          }}
        />
        <Input
          type={"textarea"}
          label={"textarea 2"}
          name={"textarea:2"}
          value={""}
          required={true}
          editAllowed={true}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
            console.log(this.state);
          }}
        />
        <Select
          label={"select label"}
          name={"select:1"}
          required={true}
          list={[
            {
              name: "111",
              value: 111,
              selected: false,
              disabled: false,
            },
            {
              name: "222",
              value: 222,
              selected: false,
              disabled: false,
            },
          ]}
          editAllowed={true}
          handleChange={({ name, value }) => {
            this.setState({ [name]: value });
            console.log(this.state);
          }}
        />
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
          handleChange={({ name, checked }) => {
            this.setState({ [name]: checked });
            console.log(this.state);
          }}
        />
        <CheckBox
          label={"checkbox 1"}
          name={"checkbox:2"}
          value={"checkbox:2"}
          checked={true}
          required={false}
          editAllowed={true}
          handleChange={({ name, checked }) => {
            this.setState({ [name]: checked });
            console.log(this.state);
          }}
        />
      </div>
    );
  }
}

export default Form;
