import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormButton } from "../../";
import cssStyles from "./successModal.module.css";

class SuccessModal extends React.Component {
  render() {
    const { message } = this.props.configs;
    console.log({ message });
    return (
      <>
        <FontAwesomeIcon className={cssStyles.icon} icon={faCheck} />
        <p>{message}</p>

        <FormButton.Contained
          full_width="true"
          onClick={() => this.props.closeModal()}
        >
          Ok
        </FormButton.Contained>
      </>
    );
  }
}

export default SuccessModal;
