export default function isEMAIL(value) {
    const errorMessage = "Email inválido";
    const email = value.trim();
  
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return { isValid: true, errorMessage };
    }
    return { isValid: false, errorMessage };
  }
  