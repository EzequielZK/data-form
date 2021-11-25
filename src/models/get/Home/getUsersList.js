import { getStorage } from "../../../service/storage";
import { apiRequest } from "../../apiConfig";

export default async function getUsersList() {
  const response = await apiRequest("GET");
  const savedUsersList = getStorage("usersList");
  console.log({ response });
  let usersList = response;
  if (savedUsersList) {
    usersList = { ...usersList, ...savedUsersList };
  }
  return usersList;
}
