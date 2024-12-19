import { Snowflake } from "~/stories/icons/snowflake";
import { TableBody, TableCell, TableRow, Table } from "./table";
import { Databricks } from "~/stories/icons/databricks";
import { S3 } from "~/stories/icons/s3";
import { Manrope } from "next/font/google";
import { cn } from "~/lib/utils";
import { PlusIcon } from "lucide-react";
import { ClockIcon } from "lucide-react";
const manrope = Manrope({
  subsets: ["latin"],
});

export interface ListProps {
  name: string;
  lastRun: string;
  createdBy: string;
  actions: string;
  integration: string[];
  running?: boolean;
  className?: string;
}
export function List({
  name,
  lastRun,
  createdBy,
  actions,
  integration,
  running = false,
  className,
}: ListProps) {
  return (
    <TableRow
      className={cn(
        "grid w-full grid-cols-8 overflow-hidden border-b border-[#27272A] bg-[#09090B] px-2 hover:bg-[#18181B]",
        manrope.className,  
        className,
      )}
    >
      <TableCell className="col-span-4 flex items-center gap-[10px] border-r border-[#27272A] p-3 text-lg font-semibold text-white">
        <PlusIcon width={16} height={16} className="text-[#52525B]" />
        <span className="truncate">{name}</span>
      </TableCell>
      <TableCell className="col-span-1 flex items-center gap-[10px] overflow-hidden border-r border-[#27272A] p-3 text-sm text-[#A1A1AA] text-muted-foreground">
        <span className="truncate">{lastRun}</span>
        {running && (
          <div className="flex items-center rounded-[3px] bg-[#09090B] p-[4.3px]">
            <ClockIcon width={12} height={12} className="text-white" />
          </div>
        )}
      </TableCell>
      <TableCell className="col-span-1 flex items-center overflow-hidden border-r border-[#27272A] p-3 text-sm text-[#A1A1AA] text-muted-foreground">
        <span className="truncate">{createdBy}</span>
      </TableCell>
      <TableCell className="col-span-1 flex items-center overflow-hidden border-r border-[#27272A] p-3 text-sm text-[#A1A1AA] text-muted-foreground">
        <span className="truncate">{actions}</span>
      </TableCell>
      <TableCell className="col-span-1 flex items-center gap-2 overflow-hidden p-3">
        {integration.map((integration, index) => (
          <div
            key={`${integration}-${index}`}
            className="flex flex-shrink-0 items-center"
          >
            {integration === "Snowflake" && (
              <Snowflake width={20} height={20} />
            )}
            {integration === "S3" && <S3 width={20} height={20} />}
            {integration === "Databricks" && (
              <Databricks width={20} height={20} />
            )}
          </div>
        ))}
      </TableCell>
    </TableRow>
  );
}
