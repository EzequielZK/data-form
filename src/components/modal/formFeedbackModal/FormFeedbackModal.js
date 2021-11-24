import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormButton } from "../../";
import cssStyles from "./formFeedbackModal.module.css";

class FormFeedbackModal extends React.Component {
  render() {
    const { fields } = this.props.configs;
    return (
      <>
        <FontAwesomeIcon
          className={cssStyles.icon}
          icon={faExclamationTriangle}
        />
        <p>
          Alguns campos obrigatórios não foram preenchidos ou estão incorretos:
        </p>
        <div className={cssStyles.fieldsContainer}>
          {fields.map((item, index) => (
            <p key={index} className={cssStyles.fields}>
              {item}
            </p>
          ))}
        </div>

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

export default FormFeedbackModal;
