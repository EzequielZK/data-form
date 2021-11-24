export default function isEMAIL(value) {
    const errorMessage = "Invalid e-mail";
    const email = value.trim();

    const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  
    if (isEmail) {
      return { isValid: true, errorMessage };
    }
    return { isValid: false, errorMessage };
  }
  