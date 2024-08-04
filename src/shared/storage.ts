import { TOKEN_STORAGE_KEY } from "./consts";

export const storage = {
  setToken: (token: string, memorization: boolean) =>
    memorization
      ? localStorage.setItem(TOKEN_STORAGE_KEY, token)
      : sessionStorage.setItem(TOKEN_STORAGE_KEY, token),

  removeToken: () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  },
};
