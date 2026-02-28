import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine multiple class values into a single class string and resolve Tailwind CSS conflicts.
 *
 * @param inputs - One or more class values (strings, arrays, objects, etc.) to be combined
 * @returns A single space-separated class string with Tailwind class conflicts merged and resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
