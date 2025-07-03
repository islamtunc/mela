// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain.
import { type ClassValue, clsx } from "clsx";
import { formatDate, formatDistanceToNowStrict } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeDate(from: Date) {
  const currentDate = new Date();
  if (currentDate.getTime() - from.getTime() < 24 * 60 * 60 * 1000) {
    return formatDistanceToNowStrict(from, { addSuffix: true });
  } else {
    if (currentDate.getFullYear() === from.getFullYear()) {
      return formatDate(from, "MMM d");
    } else {
      return formatDate(from, "MMM d, yyyy");
    }
  }
}

export function formatNumber(n: number): string {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// New function to convert a string to an array
export function stringToArray(input: string, delimiter: string = ","): string[] {
  return input
    .split(delimiter) // Split the string by the specified delimiter
    .map((item) => item.trim()) // Trim whitespace from each item
    .filter((item) => item.length > 0); // Remove empty items
}