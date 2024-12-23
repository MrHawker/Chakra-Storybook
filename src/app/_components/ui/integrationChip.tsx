import {
  CheckCheck,
  ChevronsDown,
  ChevronsUp,
  Maximize,
  Plus,
  SquareDashedMousePointer,
} from "lucide-react";
import { Manrope } from "next/font/google";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { DuckDBIcon } from "~/stories/icons/duckdb";

const manrope = Manrope({
  subsets: ["latin"],
});
interface Canvas {
  name: string;
}
interface IntegrationChipProps {
  state: "enabled" | "edit" | "empty" | "ready";
  canvases?: Canvas[] | null;
  title: string;
  description: string;
}

export function IntegrationChip({
  state = "empty",
  canvases = null,
  title,
  description,
}: IntegrationChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={cn(
        canvases &&
          "space-y-[6px] rounded border border-[#064E3B] bg-[#064E3B]",
      )}
      style={{ fontFamily: manrope.style.fontFamily }}
    >
      <BannerWithoutCanvases
        state={state}
        title={title}
        description={description}
        canvases={canvases}
      />
      {canvases && (
        <div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded gap-[10px] hover:text-[#57f8c2] pr-8 px-4 pb-[6px] ${isOpen ? "text-[#34D399]" : "text-[#A1A1AA]"} flex items-center transition-colors duration-200 ease-in-out hover:cursor-pointer ${isOpen ? "justify-between" : ""} `}
          >
            <span className="flex items-center gap-[10px] ">
              <Maximize className="w-4 h-4" />
              <span className="text-sm font-medium">
                {canvases.length} Canvases
              </span>
            </span>
            {isOpen ? (
              <ChevronsUp className="mt-[2px] h-4 w-4" />
            ) : (
              <ChevronsDown className="mt-[2px] h-4 w-4" />
            )}
          </div>
          
            <div
            
            className={`rounded px-6 gap-2 flex bg-[#022C22] overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "h-[120px]" : "h-0"}`}>
              <div className="h-full border border-[#34D399] ml-[-1px] "></div>
              <div className="py-2 space-y-1 text-[#10B981]  flex-grow overflow-auto custom-scrollbar pr-2">
              {canvases.map((canvas) => (
                <div 
                className="flex items-center gap-2 justify-between py-1 hover:text-[#57f8c2] 
                transition-colors duration-200 ease-in-out hover:cursor-pointer" key={canvas.name}>
                  <span className="flex items-center gap-2">
                    <SquareDashedMousePointer className="w-4 h-4" />
                    <span className="text-xs">{canvas.name}</span>
                  </span>
                  <span className="text-xs underline font-bold">View</span>
                </div>
              ))}
              </div>
              
            </div>
          
        </div>
      )}
    </div>
  );
}

function BannerWithoutCanvases({
  state,
  title,
  description,
  canvases,
}: IntegrationChipProps) {
  return (
    <div
      className={`flex items-center space-x-[14px] rounded border p-2 pr-4 text-[#FAFAFA] ${manrope.className} transition-all duration-200 ease-in-out ${
        state === "enabled" || canvases
          ? "border-[#064E3B] bg-[#022C22]"
          : "border-[#27272A] bg-[#18181B] hover:cursor-pointer hover:bg-[#09090B]"
      } ${state === "empty" && !canvases && "pointer-events-none opacity-50"} `}
    >
      <DuckDBIcon state="enabled" />
      <div className="flex flex-grow">
        <div className="flex w-full flex-col space-y-[6px]">
          <p>{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div
          className={`flex items-center rounded-sm border p-2 ${
            state === "enabled" || canvases
              ? "border-[#10B981] bg-[#064E3B]"
              : "border-[#52525B] text-[#52525B] text-muted"
          }`}
        >
          {(state === "enabled" || canvases) && (
            <CheckCheck width={28} height={28} />
          )}
          {state === "edit" && (
            <span className="px-2 py-1 text-xs font-semibold">Configure</span>
          )}
          {(state === "empty" || state === "ready") && (
            <Plus width={28} height={28} />
          )}
        </div>
      </div>
    </div>
  );
}
