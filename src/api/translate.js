import axios from "axios";

export const translateAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_TRANSLATE,
  headers: { "content-type": "application/json" },
});
