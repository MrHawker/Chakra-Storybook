
import { cn } from "~/lib/utils";
import { TableBody, Table, TableHeader, TableRow, TableHead } from "./table";

import { Manrope } from "next/font/google";
import { List, ListProps } from "./List";

const manrope = Manrope({
  subsets: ["latin"],
});

interface TableListProps {
  columns: string[];
  rows: ListProps[];
}
export function TableList({
  columns,
  rows,
}: TableListProps) {
  return (
        <Table className={cn(manrope.className, "w-full p-0 rounded-md")}>
            <TableHeader className="pointer-events-none"> 
            <TableRow className="grid grid-cols-8 px-2 rounded-t-md bg-[#18181B] border-b border-[#27272A]">
                <TableHead className="col-span-4 flex items-center border-r border-[#27272A]">{columns[0]}</TableHead>
                <TableHead className="col-span-1 flex items-center border-r border-[#27272A]">{columns[1]}</TableHead>
                <TableHead className="col-span-1 flex items-center border-r border-[#27272A]">{columns[2]}</TableHead>
                <TableHead className="col-span-1 flex items-center border-r border-[#27272A]">{columns[3]}</TableHead>
                <TableHead className="col-span-1 flex items-center border-[#27272A]">{columns[4]}</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, index) => (
                    index === rows.length - 1 ? <List key={index} {...row} className="rounded-b-md" /> : <List key={index} {...row} />
                ))}
            </TableBody>
        </Table>
      
  );
}
