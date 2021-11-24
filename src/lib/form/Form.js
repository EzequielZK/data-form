import React, { Component } from "react";
import FormConfig from "./formConfig";

class Form extends Component {
  constructor(props) {
    super(props);

    this.formHandler = new FormConfig(
      props.onSubmit,
      props.formRef,
      props.clearOnSubmit
    );
  }
  static FormContext = React.createContext(null);

  render() {
    return (
      <Form.FormContext.Provider value={{ formHandler: this.formHandler }}>
        {this.props.children}
      </Form.FormContext.Provider>
    );
  }
}

export default Form;
