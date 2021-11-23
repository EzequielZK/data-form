import React, { Component } from "react";
import ErrorModal from "./errorModal/ErrorModal";
import FormFeedbackModal from "./formFeedbackModal/FormFeedbackModal";
import NotImplemented from "./notImplemented/NotImplemented";
import { getModalRef } from "./openModal";
import modalStyles from "./modal.module.css";
import ServerErrorModal from "./serverErrorModal/ServerErrorMomodal";
import ShowModal from "./showModal/showModal";
import { OutsideClick } from "..";
import SuccessModal from "./successModal/SuccessModal";
import PatchNotesModal from "./patchNotesModal/PatchNotesModal";

class Modal extends Component {
  state = {
    configs: {},
    open: false,
    type: null,
  };

  componentDidMount() {
    getModalRef(this);
  }

  setModalConfigs = (configs, type, open) => {
    if (open) {
      setTimeout(() => {
        this.setState({ open, configs, type });
      }, 50);
    }
  };

  modalTypes = () => {
    const { type } = this.state;
    const types = {
      error: ErrorModal,
      success: SuccessModal,
      serverError: ServerErrorModal,
      formFeedback: FormFeedbackModal,
    };
    return types[type];
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const Component = this.modalTypes();
    if (this.state.open) {
      return (
        <div className={modalStyles.container}>
          <OutsideClick onOutsideClick={() => this.closeModal()}>
            <div
              className={`${modalStyles.content} ${
                modalStyles[this.state.type]
              } ${modalStyles[this.state.configs?.type]}`}
            >
              <Component
                configs={this.state.configs}
                closeModal={this.closeModal}
              />
            </div>
          </OutsideClick>
        </div>
      );
    }
    return <></>;
  }
}

export default Modal;
