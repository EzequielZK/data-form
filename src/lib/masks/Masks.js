function inputMaskCPF(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return mask;
}

function clearStringOnlyNumbers(value) {
  return value ? `${value}`.replace(/\D/g, "") : value;
}

function inputCelMask(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 10) {
    mask = mask.replace(/(\d{2})(\d)/, "($1) $2");
    mask = mask.replace(/(\d{4})(\d)/, "$1-$2");
  } else if (mask.length <= 11) {
    mask = mask.replace(/(\d{2})(\d{1})(\d)/, "($1) $2 $3");
    mask = mask.replace(/(\d{4})(\d{4})$/, "$1-$2");
  }
  return mask;
}

export { inputMaskCPF, inputCelMask };
