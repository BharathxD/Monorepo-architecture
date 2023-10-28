import { ClassValue } from 'clsx';

/**
 * Merges multiple class values into a single string for Tailwind CSS.
 * @param {...ClassValue} inputs - Class values to be merged.
 * @returns {string} Merged class string.
 */
declare const cn: (...inputs: ClassValue[]) => string;

export { cn };
