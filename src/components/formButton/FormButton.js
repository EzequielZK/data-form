import React from "react";
import { CircularProgress } from "..";
import Form from "../../lib/form/Form";
import cssStyles from "./formButton.module.css";

class FormButton extends React.Component {
  onClick = (context, onClick) => {
    if (context && this.props.type === "submit") {
      context.formHandler.submit();
    } else {
      if (onClick) {
        onClick();
      }
    }
  };
  render() {
    const { children, ...props } = this.props;
    return (
      <button
        {...props}
        onClick={() => {
          if (props.is_loading !== "true") {
            this.onClick(this.context, this.props.onClick);
          }
        }}
      >
        {props.is_loading === "true" ? (
          <CircularProgress size="small" color={this.props.loading_color} />
        ) : (
          children
        )}
      </button>
    );
  }
}

FormButton.contextType = Form.FormContext;

function Contained({ children, ...props }) {
  return (
    <FormButton
      {...props}
      loading_color="dark"
      className={`${cssStyles.containedButton} ${
        props.alternative ? cssStyles.alternative : ""
      } ${props.full_width ? cssStyles.fullWidth : ""}`}
    >
      {children}
    </FormButton>
  );
}

function Outlined({ children, ...props }) {
  return (
    <FormButton
      {...props}
      loading_color="dark"
      className={`${cssStyles.outlinedButton} ${
        props.full_width ? cssStyles.fullWidth : ""
      }`}
    >
      {children}
    </FormButton>
  );
}

function Text({ children, ...props }) {
  return (
    <FormButton
      {...props}
      loading_color="green"
      className={cssStyles.textButton}
    >
      {children}
    </FormButton>
  );
}

export default { Contained, Outlined, Text };
