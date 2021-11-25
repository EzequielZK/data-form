import { removeMask } from "./utils";

const isCellphone = (cellphone) => {
  let errorMessage = "Invalid cellphone number";
  if (!cellphone) {
    return { isValid: false, errorMessage: "Insert a cellphone number" };
  }
  const withoutMask = removeMask(cellphone);
  if (withoutMask) {
    if (withoutMask.length === 11) {
      return { isValid: true, errorMessage };
    }
  }
  return { isValid: false, errorMessage };
};

export { isCellphone };
