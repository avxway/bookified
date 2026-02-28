import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Compose class names from the given values and resolve Tailwind CSS class conflicts.
 *
 * @param inputs - Values (strings, arrays, objects, etc.) accepted by `clsx` to form class names
 * @returns A single string of merged class names with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
