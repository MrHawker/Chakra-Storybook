export function DownArrow({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width={isOpen ? "20" : "16"}
      height={isOpen ? "20" : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.19526 3.52851C4.45561 3.26816 4.87772 3.26816 5.13807 3.52851L8 6.39044L10.8619 3.52851C11.1223 3.26816 11.5444 3.26816 11.8047 3.52851C12.0651 3.78886 12.0651 4.21097 11.8047 4.47132L8.4714 7.80466C8.21106 8.06501 7.78894 8.06501 7.5286 7.80466L4.19526 4.47132C3.93491 4.21097 3.93491 3.78886 4.19526 3.52851Z"
        fill={isOpen ? "#FAFAFA" : "#A1A1AA"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.19526 8.19526C4.45561 7.93491 4.87772 7.93491 5.13807 8.19526L8 11.0572L10.8619 8.19526C11.1223 7.93491 11.5444 7.93491 11.8047 8.19526C12.0651 8.45561 12.0651 8.87772 11.8047 9.13807L8.4714 12.4714C8.21106 12.7318 7.78894 12.7318 7.5286 12.4714L4.19526 9.13807C3.93491 8.87772 3.93491 8.45561 4.19526 8.19526Z"
        fill={isOpen ? "#FAFAFA" : "#A1A1AA"}
      />
    </svg>
  );
}
