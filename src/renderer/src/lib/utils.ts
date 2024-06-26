import clsx, { ClassValue } from "clsx";
// @ts-ignore 莫名其妙报错，不影响使用
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
