import axios from "axios";

export const amgApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // params: {}
});


export const axiosPython = axios.create({
  baseURL: import.meta.env.VITE_API_URL_PYTHON,
  // params: {}
});