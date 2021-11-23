export default function isCPF(value) {
  const errorMessage = "CPF inválido!";
  const cpf = value.trim();
  console.log({ cpf });
  console.log(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf));
  if (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(cpf)) {
    return { isValid: true, errorMessage };
  }
  return { isValid: false, errorMessage };
}
