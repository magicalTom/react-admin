const key = 'local-storage-token';

export const setToken = (token: string) => localStorage.setItem(key, token);

export const getToken = () => localStorage.getItem(key);
