import { isEmail, isCPF } from "./functions";


export default class Validations {
  value = null;
  test = null;

  testers = {
    email: () => isEmail(this.value),
    cpf: () => isCPF(this.value)
  };

  constructor(value, test) {
    this.value = value;
    this.test = test;
  }

  isValid = () => {
    const test = this.testers[this.test];
    const { isValid, errorMessage } = test();
    return { isValid, errorMessage };
  };
}
