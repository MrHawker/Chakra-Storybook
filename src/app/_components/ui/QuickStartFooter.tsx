import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
});

export function QuickStartFooter({className}: {className?: string}) {
  return <div className={`${manrope.className} bg-[#18181B] px-3 py-2 flex justify-between rounded-b text-[#A1A1AA] ${className}`}>
    <span className="flex items-center gap-1">
        <span className="bg-[#52525B] px-[6px] py-1 rounded text-xs truncate">
            ENTER
        </span>
        <span className="text-xs flex items-center truncate">
            to select
        </span>
    </span>
    <span className="flex items-center gap-1">
        <span className="bg-[#52525B] px-[6px] py-1 rounded text-xs truncate">
            ARROW UP
        </span>
        <span className="bg-[#52525B] px-[6px] py-1 rounded text-xs truncate">
            ARROW DOWN
        </span>
        <span className="text-xs flex items-center truncate">
            to select
        </span>
    </span>
    <span className="flex items-center gap-1">
        <span className="bg-[#52525B] px-[6px] py-1 rounded text-xs truncate">
            ESC
        </span>
        <span className="text-xs flex items-center truncate ">
            to cancel
        </span>
    </span>
    
  </div>;
}

