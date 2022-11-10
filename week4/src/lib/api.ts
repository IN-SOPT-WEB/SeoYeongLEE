import axios from "axios";
import { BASE_URL } from "./constants";

export const getProfile = async (username: string) => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return { data };
};
