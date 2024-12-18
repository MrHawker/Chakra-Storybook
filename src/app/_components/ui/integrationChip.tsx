import { CheckCheck } from "lucide-react";
import { Manrope } from "next/font/google";
import { DuckDBIcon } from "~/stories/icons/duckdb";


const manrope = Manrope({
    subsets: ["latin"],
  });
  
export function IntegrationChip({
  state,
  children,
}: {
  state: "enabled" | "edit";
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-center space-x-[14px] p-2 pr-4 rounded-md text-[#FAFAFA] ${manrope.className}
    ${state === "enabled" && "bg-[#022C22] border-[#064E3B]"}
    ${state === "edit" && "bg-[#18181B] border-[#27272A]"}
    `}>
      <DuckDBIcon state="enabled" />
      <div className="flex flex-grow">
        <div className="flex flex-col space-y-[6px] w-full">
            <p>DuckDB</p>
            <p className="text-xs text-muted-foreground">Database</p>
        </div>
        <div className={`rounded-sm p-2 border items-center flex 
            ${state === "enabled" && "border-[#10B981] bg-[#064E3B]"} 
            ${state === "edit" && " border-[#52525B]  text-[#52525B] text-muted px-4"}`}>
            {state === "enabled" && <CheckCheck width={28} height={28}  />}
            {state === "edit" && <span className="text-xs font-semibold">Configure</span>}
        </div>
      </div>
    </div>
  );
}
