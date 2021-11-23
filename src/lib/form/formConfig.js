import openModal from "../../components/modal/openModal";

class FormData {
  data = {};
  onSubmit = null;
  inputLabels = {};
  inputRefs = {};
  tradeValues = [];
  customComponentsRefs = {};

  constructor(onSubmit, tradeValues, formRef) {
    this.onSubmit = onSubmit;
    this.tradeValues = tradeValues;
    if (formRef) {
      formRef(this);
    }
  }

  saveCustomComponentsRefs = (key, ref) => {
    this.customComponentsRefs = { ...this.customComponentsRefs, [key]: ref };
  };



  getValue = (name) => {
    return this.inputRefs[name].state.value;
  };

  setValue = (name, value) => {
    this.inputRefs[name].setValue({ target: { value } });
  };




  fillInitialLabels = (key, label) => {
    this.inputLabels = { ...this.inputLabels, [key]: label };
  };

  validateInputs = () => {
    const missingInputs = [];
    const missingLabels = [];
    let key;

    for (key in this.inputLabels) {
      if (!this.data[key]) {
        missingInputs.push(key);
      }
    }

    if (missingInputs.length) {
      const { length } = missingInputs;
      let i = 0;

      for (; i < length; i++) {
        const item = missingInputs[i];
        missingLabels.push(this.inputLabels[item]);
      }
      return { validForm: false, missingLabels };
    }
    return { validForm: true, missingLabels };
  };

  addData = (key, value) => {
    this.data = { ...this.data, [key]: value };
  };

  removeData = (key) => {
    delete this.data[key];
  };

  submit = () => {
    const { validForm, missingLabels } = this.validateInputs();
    if (this.onSubmit) {
      if (validForm) {
        this.onSubmit(this.data);
      } else {
        openModal.formFeedbackModal({
          fields: missingLabels,
        });
      }
    }
  };
}

export default FormData;
