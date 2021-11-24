import React from "react";
import FormBase from "../../lib/form/formBase";
import cssStyles from "./input.module.css";

export default class Input extends FormBase {
  render() {
    const { mask, ...props } = this.props;
    return (
      <div className={cssStyles.container}>
        {this.props.label ? (
          <span>
            {this.props.label}
            {this.props.required ? "*" : ""}
          </span>
        ) : null}

        <input
          {...props}
          className={cssStyles.input}
          value={this.state.value}
          onChange={this.setValue}
        />
        {this.state.error ? (
          <span className={cssStyles.errorMessage}>
            {this.state.errorMessage}
          </span>
        ) : null}
      </div>
    );
  }
}
