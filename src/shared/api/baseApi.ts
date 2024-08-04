import axios from "axios";
import { authRequestInterceptor } from "./interceptors";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

baseApi.interceptors.request.use(authRequestInterceptor);
