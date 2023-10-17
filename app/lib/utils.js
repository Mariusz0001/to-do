import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const setUserToken = (token) =>
  typeof window !== "undefined"
    ? window.localStorage.setItem("userAuth", token)
    : false;

export const getUserToken = () =>
  typeof window !== "undefined"
    ? window.localStorage.getItem("userAuth")
    : false;
