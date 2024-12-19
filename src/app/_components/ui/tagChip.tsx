/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hVl5q7YIHfe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { X } from "lucide-react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});
interface TagChipProps extends React.HTMLAttributes<HTMLDivElement> {
  tableName: string;
  onRemove: () => void;
}
export function TagChip({tableName, onRemove, ...props}: TagChipProps) {
  return (
    <span style={{fontFamily: manrope.style.fontFamily}} 
    className="bg-[#042F2E] w-fit px-[6px] py-1 items-center space-x-2 rounded-sm text-[#14B8A6] text-[10px] 
    flex hover:bg-[#14B8A6] hover:text-[#042F2E] transition-all duration-300 ease-in-out group"
    {...props}
    >
      <span>{tableName}</span>
      <span className="cursor-pointer pl-2 border-l border-[#14B8A6] group-hover:border-[#042F2E] border-opacity-20 group-hover:border-opacity-20">
        <X className="w-4 h-4" onClick={onRemove} />
      </span>
    </span>
  );
}