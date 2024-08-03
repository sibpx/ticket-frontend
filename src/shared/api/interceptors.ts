import { InternalAxiosRequestConfig } from "axios";

export function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token =
    sessionStorage.getItem("ticket_token") ||
    localStorage.getItem("ticket_token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  return config;
}
