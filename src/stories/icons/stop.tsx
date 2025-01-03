export function StopIcon({ kind }: { kind: "error" | "info" | "warning" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3100_28528)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00033 1.99996C4.68662 1.99996 2.00033 4.68625 2.00033 7.99996C2.00033 11.3137 4.68662 14 8.00033 14C11.314 14 14.0003 11.3137 14.0003 7.99996C14.0003 4.68625 11.314 1.99996 8.00033 1.99996ZM0.666992 7.99996C0.666992 3.94987 3.95024 0.666626 8.00033 0.666626C12.0504 0.666626 15.3337 3.94987 15.3337 7.99996C15.3337 12.05 12.0504 15.3333 8.00033 15.3333C3.95024 15.3333 0.666992 12.05 0.666992 7.99996Z"
          fill={kind === "error" ? "#EF4444" : kind === "info" ? "#06B6D4" : "#F97316"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.66634 6.66671V9.33337H9.33301V6.66671H6.66634ZM5.33301 6.66671C5.33301 5.93033 5.92996 5.33337 6.66634 5.33337H9.33301C10.0694 5.33337 10.6663 5.93033 10.6663 6.66671V9.33337C10.6663 10.0698 10.0694 10.6667 9.33301 10.6667H6.66634C5.92996 10.6667 5.33301 10.0698 5.33301 9.33337V6.66671Z"
          fill={kind === "error" ? "#EF4444" : kind === "info" ? "#06B6D4" : "#F97316"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3100_28528">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
