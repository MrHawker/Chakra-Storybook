/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hVl5q7YIHfe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});
interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}
export function SearchBar({placeholder, ...props}: SearchBarProps) {
  return (
    <div style={{fontFamily: manrope.style.fontFamily}} 
    className="bg-[#18181B] border border-[#27272A] flex w-full items-center space-x-2 rounded-sm px-1 py-[6px] "
    {...props}
    >
      <SearchIcon className="h-4 w-4" />
      <input
        placeholder={placeholder || "Search and select table"}
        className="w-full border-0 text-xs font-semibold text-[#A1A1AA] text-muted outline-none placeholder:text-muted-foreground bg-transparent"
      ></input>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.33301 2.66683C4.75568 2.66683 2.66634 4.75617 2.66634 7.3335C2.66634 9.91083 4.75568 12.0002 7.33301 12.0002C9.91034 12.0002 11.9997 9.91083 11.9997 7.3335C11.9997 4.75617 9.91034 2.66683 7.33301 2.66683ZM1.33301 7.3335C1.33301 4.01979 4.0193 1.3335 7.33301 1.3335C10.6467 1.3335 13.333 4.01979 13.333 7.3335C13.333 10.6472 10.6467 13.3335 7.33301 13.3335C4.0193 13.3335 1.33301 10.6472 1.33301 7.3335Z"
        fill="#A1A1AA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6621 10.6621C10.9224 10.4017 11.3445 10.4017 11.6049 10.6621L14.4715 13.5287C14.7319 13.7891 14.7319 14.2112 14.4715 14.4715C14.2112 14.7319 13.7891 14.7319 13.5287 14.4715L10.6621 11.6049C10.4017 11.3445 10.4017 10.9224 10.6621 10.6621Z"
        fill="#A1A1AA"
      />
    </svg>
  );
}
