import React from "react";
import { FormButton } from "../../";
import cssStyles from "./chooseModal.module.css";

class ChooseModal extends React.Component {
  render() {
    const { buttons = [], text } = this.props.configs;
    return (
      <>
        <p>{text}</p>
        <div className={cssStyles.buttonsContainer}>
          {buttons.map((item, index) => {
            const Button = FormButton[item.style];
            return (
              <div key={`${item} - ${index}`}>
                <Button onClick={item.onClick}>{item.label}</Button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChooseModal;
