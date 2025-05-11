import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue =
    | string
    | number
    | null
    | boolean
    | undefined
    | ClassValue[]
    | { [key: string]: boolean | undefined };

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
