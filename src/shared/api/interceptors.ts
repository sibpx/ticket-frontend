import { InternalAxiosRequestConfig } from "axios";
import { TOKEN_STORAGE_KEY } from "shared";

export function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token =
    sessionStorage.getItem(TOKEN_STORAGE_KEY) ||
    localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}
