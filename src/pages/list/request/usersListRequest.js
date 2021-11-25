import { getUsersList } from "../../../models/get";
import { saveStorage } from "../../../service/storage";

export function saveUsersList() {
  const usersList = getUsersList();

  saveStorage("usersList", usersList);
}
