export const Snowflake = ({ width = 12, height = 12, isOpen = false }: { width?: number; height?: number, isOpen?: boolean }) => {
  return (
    <svg
      width= {width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0_5812_14184)" />
      <defs>
        <pattern
          id="pattern0_5812_14184"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_5812_14184" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0_5812_14184"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
