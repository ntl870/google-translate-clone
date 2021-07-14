import axios from "axios";

export const langsAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_LANG,
  headers: { "Content-Type": "application/json" },
});
