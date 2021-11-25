import { getUsersList } from "../../../models/get";
import { getStorage, saveStorage } from "../../../service/storage";

export async function saveUsersList() {
  const storageKey = "usersList";
  const response = await getUsersList();
  const savedUsersList = getStorage(storageKey);
  const usersList = [...response.data];
  if (savedUsersList) {
    usersList.push(savedUsersList);
  }
  saveStorage(storageKey, usersList);
}
