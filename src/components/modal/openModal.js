let modalRef = null;
let savedConfigs = null;

export function getModalRef(ref) {
  if (!modalRef) {
    modalRef = ref;
  }
}

function errorModal({ message, consoleError }) {
  savedConfigs = {
    message,
    consoleError,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "error", true);
}

function successModal({ message }) {
  savedConfigs = {
    message,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "success", true);
}

function formFeedbackModal({ fields }) {
  savedConfigs = {
    fields,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "formFeedback", true);
}

function serverErrorModal({ response }, { statusError = [] } = {}) {
  if (
    response.status !== 401 ||
    (response.status === 401 && statusError.length)
  ) {
    savedConfigs = {
      response,
      statusError,
    };
    if (!modalRef) {
      return;
    }
    modalRef.setModalConfigs(savedConfigs, "serverError", true);
  }
}

function notImplemented() {
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "notImplemented", true);
}

function show({ title, type, component, ...props }) {
  savedConfigs = {
    title,
    type,
    component,
    ...props,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "show", true);
}

function patchNotes({ history, ...props }) {
  savedConfigs = {
    history,
    ...props,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "patchNotes", true);
}

export function closeModal() {
  modalRef.closeModal();
}

export default {
  errorModal,
  successModal,
  formFeedbackModal,
  notImplemented,
  serverErrorModal,
  show,
  patchNotes,
};
