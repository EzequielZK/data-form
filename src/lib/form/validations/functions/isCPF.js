export default function isCPF(value) {
  const errorMessage = "Invalid CPF!";
  const cpf = value.trim();
  const isCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/.test(cpf);
  if (isCpf) {
    return { isValid: true, errorMessage };
  }
  return { isValid: false, errorMessage };
}
