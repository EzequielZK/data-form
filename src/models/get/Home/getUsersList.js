import { apiRequest } from "../../apiConfig";

export default async function getUsersList() {
  const response = await apiRequest("GET");

  return { ...response, data: JSON.parse(response.data) };
}
