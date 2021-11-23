import React from "react";
import FormBase from "../../lib/form/formBase";
import cssStyles from "./input.module.css";

export default class Input extends FormBase {
  render() {
    return (
      <div className={cssStyles.container}>
        <input
          {...this.props}
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
