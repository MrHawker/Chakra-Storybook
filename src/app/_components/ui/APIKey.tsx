import { CheckCheck, Copy, Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { Manrope, Ubuntu_Mono } from "next/font/google";
import { useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: "400" });

interface APIKeyProps {
  apiKey: string;
}

export function APIKey({ apiKey }: APIKeyProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={`${manrope.className} flex gap-[10px] overflow-auto border border-[#27272A] ${isVisible || isCopied ? "bg-[#09090B]" : "bg-[#18181B]"} pr-2 transition-all duration-300`}
    >
      <span
        onClick={() => setIsVisible(!isVisible)}
        className={`flex h-12 w-12 items-center border-r border-[#27272A] transition-all duration-300 hover:text-slate-300 ${isVisible ? "bg-[#18181B]" : "bg-[#09090B]"} cursor-pointer px-4 py-2 text-white`}
      >
        {isVisible ? (
          <Eye className="h-4 w-4" />
        ) : (
          <EyeClosed className="h-4 w-4" />
        )}
      </span>

      <input
        className={`${ubuntuMono.className} 
            flex flex-grow items-center overflow-clip bg-transparent px-2 outline-none ${isVisible ? "text-white" : "text-[#52525B] text-4xl mt-2"}
            
            `}
        disabled
        value={
          isVisible
            ? apiKey
            : "******************************************************************************************************************************************************************************************"
        }
      ></input>
      <span className="flex items-center">
        {!isCopied ? (
          <span
            onClick={() => {
              navigator.clipboard.writeText(apiKey);
              setIsCopied(true);
            }}
            className="flex items-center gap-2 rounded border border-[#52525B] p-[6px] text-[#52525B] transition-colors duration-300 hover:cursor-pointer hover:border-white hover:text-white"
          >
            <Copy className="h-4 w-4" />
            <span className="text-sm font-semibold">Copy</span>
          </span>
        ) : (
          <span className="flex items-center gap-2 rounded border border-[#042F2E] bg-[#10B981] p-[6px] text-[#042F2E]">
            <CheckCheck className="h-4 w-4" />
            <span className="text-sm font-semibold">Copied</span>
          </span>
        )}
      </span>
    </div>
  );
}
