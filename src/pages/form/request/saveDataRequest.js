import openModal from "../../../components/modal/openModal";
import { getStorage, saveStorage } from "../../../service/storage";

function saveDataRequest(value) {
  const key = "usersData";

  const storage = getStorage(key);
  if (storage) {
    storage.push(value);
    saveStorage(key, storage);
  } else {
    const usersList = [{ ...value }];
    saveStorage(key, usersList);
  }
  openModal.successModal({ message: "Usuário adicionado com sucesso!" });
}

export { saveDataRequest };
