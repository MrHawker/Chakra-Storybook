interface BlockLoaderProps {
  iconColor: string;
}
export const BlockLoader = ({ iconColor }: BlockLoaderProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3114_29119)">
        <mask
          id="mask0_3114_29119"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <rect width="32" height="32" fill="url(#paint0_radial_3114_29119)" />
        </mask>
        <g mask="url(#mask0_3114_29119)">
          <path opacity="0.5" d="M14 34V26L11 23V31L14 34Z" fill={iconColor} />
          <path
            d="M14 26H22M14 26V34M14 26L11 23M22 26V34H14M22 26L19 23H11M14 34L11 31V23"
            stroke={iconColor}
            stroke-linejoin="round"
          />
          <path opacity="0.5" d="M14 21V13L11 10V18L14 21Z" fill={iconColor} />
          <path
            d="M14 13H22M14 13V21M14 13L11 10M22 13V21H14M22 13L19 10H11M14 21L11 18V10"
            stroke={iconColor}
            stroke-linejoin="round"
          />
          <path opacity="0.5" d="M14 8V0L11 -3V5L14 8Z" fill={iconColor} />
          <path
            d="M14 0H22M14 0V8M14 0L11 -3M22 0V8H14M22 0L19 -3H11M14 8L11 5V-3"
            stroke={iconColor}
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_3114_29119"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16 16) rotate(90) scale(16 102.341)"
        >
          <stop offset="0.749093" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <clipPath id="clip0_3114_29119">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
