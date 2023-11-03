import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const setUserToken = (data) =>
  setStorageItem(process.env.NEXT_PUBLIC_AUTH_STORAGE_PATH, data);

export const getUserToken = () => {
  return getStorageItem(process.env.NEXT_PUBLIC_AUTH_STORAGE_PATH);
};

export const setUserName = (data) =>
  setStorageItem(process.env.NEXT_PUBLIC_USERNAME_STORAGE_PATH, data);

export const getUserName = () => {
  return getStorageItem(process.env.NEXT_PUBLIC_USERNAME_STORAGE_PATH);
};

const setStorageItem = (item, value) =>
  typeof window !== "undefined"
    ? window.localStorage.setItem(item, value)
    : false;

const getStorageItem = (item) =>
  typeof window !== "undefined" ? window.localStorage.getItem(item) : false;
