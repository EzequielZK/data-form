function saveStorage(key, value) {
  const newValue = JSON.stringify(value);
  localStorage.setItem(key, newValue);
}

function getStorage(key) {
  const savedStorage = JSON.parse(localStorage.getItem(key));
  return savedStorage;
}

export { saveStorage, getStorage };
