import type { SVGProps } from "react";

const PATHS = {
  whatsapp:
    "M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1",
  sparkles:
    "M16 18a2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2 2 2 0 0 1-2 2Zm0-12a2 2 0 0 1 2 2 2 2 0 0 1 2-2 2 2 0 0 1-2-2 2 2 0 0 1-2 2ZM9 18a6 6 0 0 1 6-6 6 6 0 0 1-6-6 6 6 0 0 1-6 6 6 6 0 0 1 6 6Z",
  bolt: "M13 3v7h6l-8 11v-7H5l8-11",
  calendar: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7ZM16 3v4M8 3v4M4 11h16",
  heart: "M19.5 12.57 12 20l-7.5-7.43A5 5 0 1 1 12 6.01a5 5 0 1 1 7.5 6.57",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 3",
  pin: "M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM17.66 16.66 13.41 20.9a2 2 0 0 1-2.83 0l-4.24-4.24a8 8 0 1 1 11.32 0Z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M18 6 6 18M6 6l12 12",
  arrow: "M5 12h14M13 18l6-6M13 6l6 6",
  star: "m12 17.75-6.17 3.24 1.18-6.87-5-4.86 6.9-1 3.08-6.25 3.09 6.25 6.9 1-5 4.86 1.18 6.87z",
} as const;

export type IconName = keyof typeof PATHS;

type Props = { name: IconName; size?: number } & Omit<SVGProps<SVGSVGElement>, "name">;

/** Decorative by default (aria-hidden): always pair with visible text or an aria-label on the parent. */
export default function Icon({ name, size = 20, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
