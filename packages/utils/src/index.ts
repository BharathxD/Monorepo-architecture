import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into a single string for Tailwind CSS.
 * @param {...ClassValue} inputs - Class values to be merged.
 * @returns {string} Merged class string.
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export { cn };
