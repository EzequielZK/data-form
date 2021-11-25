let modalRef = null;
let savedConfigs = null;

export function getModalRef(ref) {
  if (!modalRef) {
    modalRef = ref;
  }
}

function chooseModal({ text, buttons = [] }) {
  savedConfigs = {
    text,
    buttons,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "choose", true);
}

function editForm({ firstname, lastname, cpf, phone, email, index }) {
  savedConfigs = {
    firstname,
    lastname,
    cpf,
    phone,
    email,
    index,
  };
  if (!modalRef) {
    return;
  }
  modalRef.setModalConfigs(savedConfigs, "editForm", true);
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

export function closeModal() {
  modalRef.closeModal();
}

const modals = {
  successModal,
  formFeedbackModal,
  serverErrorModal,
  chooseModal,
  editForm,
};

export default modals;
