import axios from "axios";

export const detectAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_DETECT,
  headers: {
    "content-type": "application/json",
  },
});
