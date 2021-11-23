import { Component } from "react";
import Validations from "./validations/validations";
import Form from "./Form";

class FormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      errorMessage: "",
      required: props.required ? props.required : null,
      type: "text",
    };
    this.mounted = false;
    this.ref = null;
  }

  componentDidMount() {
    const { formHandler } = this.context;
    this.formHandler = formHandler;
    const { defaultValue } = this.props;

    if (defaultValue) {
      this.setState({ value: defaultValue }, () =>
        this.formHandler.addData(this.props.name, this.state.value)
      );
    }
    if (this.state.required) {
      this.formHandler.fillInitialLabels(this.props.name, this.props.label);
    }

    this.mounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value && !this.state.value) {
      this.formHandler.removeData(this.props.name);
    }
  }

  setValue = (event) => {
    console.log({ event });
    const { value, type = "text" } = event.target;

    const { mask, maxLength } = this.props;

    let newValue = maxLength ? value.substring(0, this.props.maxLength) : value;
    if (mask) {
      newValue = mask(newValue);
    }

    this.setState(
      {
        value: newValue,
        error: false,
        errorMessage: "",
        type,
      },
      () => {
        if (value) {
          this.defaultValidation();
          this.sendValueToSubmit();
        } else {
          this.formHandler.removeData(this.props.name);
        }
      }
    );
  };

  sendValueToSubmit() {
    const parsedValue =
      typeof this.state.value === "string"
        ? this.state.value.trim()
        : this.state.value;
    this.formHandler.addData(this.props.name, parsedValue);
  }

  handleKeyPress = (event) => {
    if (!event.shiftKey && event && event.key === "Enter") {
      event.stopPropagation();
      if (this.props.submit) {
        event.preventDefault();
        this.formHandler.submit();
      }
    }
  };

  defaultValidation = () => {
    if (this.state.required) {
      if (!this.state.value) {
        this.setState({ error: true, errorMessage: this.state.required });
      } else {
        this.setState({ error: false, errorMessage: "" });
      }
    }
    if (this.props.test && this.state.value) {
      const test = new Validations(this.state.value, this.props.test);

      const { isValid, errorMessage } = test.isValid();
      if (isValid && this.props.validation) {
        const { customValid, customErrorMessage } = this.customValidation();
        this.setState({
          error: !customValid,
          errorMessage: customErrorMessage,
        });
        if (!customValid) {
          this.formHandler.removeData(this.props.name);
        }
        return;
      }
      this.setState({ error: !isValid, errorMessage });
      if (!isValid) {
        this.formHandler.removeData(this.props.name);
      }
      return;
    }
    return;
  };

  customValidation = () => {
    const { isValid, errorMessage } = this.props.validation(this.state.value);
    return { customValid: isValid, customErrorMessage: errorMessage };
  };
}

FormBase.contextType = Form.FormContext;

export default FormBase;
