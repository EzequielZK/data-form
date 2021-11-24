function saveStorage(key, value) {
  const newValue = JSON.stringify(value);
  console.log({ key, newValue, value });
  localStorage.setItem(key, newValue);
}

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export { saveStorage, getStorage };
