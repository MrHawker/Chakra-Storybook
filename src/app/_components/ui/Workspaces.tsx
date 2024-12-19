import { cn } from "~/lib/utils";
import { Manrope } from "next/font/google";
import { Menu } from "./Menu";
import GridCard from "./GridCard";
import { TableList } from "./TableList";
import { useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export interface Data {
  columns: string[];
  rows: any[];
}


interface WorkspacesProps {
  className?: string;
  list?: boolean;
  data: Data;
}

export function Workspaces({ className, list, data = { columns: [], rows: [] } }: WorkspacesProps) {
  const [isList, setIsList] = useState(list);   
  return (
    <div className={cn(manrope.className, "space-y-4 rounded-xl transition-all duration-300 ease-in-out", className)}>
      <Menu className="sticky top-0 z-50 bg-[#121212] py-4" list={isList} setList={setIsList} />
      <div className="relative">
        <div className={cn(
          "transition-all duration-300 ease-in-out absolute w-full",
          isList ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
        )}>
          <TableList {...data} />
        </div>
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          isList ? "opacity-0 z-0 scale-95" : "opacity-100 z-10 scale-100"
        )}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data.rows.map((row: any, index: number) => (
              <GridCard key={index} {...row} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
