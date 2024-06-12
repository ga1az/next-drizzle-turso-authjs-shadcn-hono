import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (env.NEXT_PUBLIC_DOMAIN.startsWith("localhost")) {
    return `http://${env.NEXT_PUBLIC_DOMAIN}`;
  }
  return `https://${env.NEXT_PUBLIC_DOMAIN}`;
}
