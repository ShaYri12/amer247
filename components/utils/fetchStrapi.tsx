// utils/fetchStrapi.js

import axios from "./axiosConfig";

export async function fetchStrapi(query: string) {
  const response = await axios.get(`/${query}`);
  return response.data;
}
