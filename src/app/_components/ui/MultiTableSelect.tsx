import { Manrope } from "next/font/google";
import { TagChip } from "./tagChip";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { TableProperties } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
});
interface tableListProps {
  tableName: string;
  selected: boolean;
}
interface MultiTableSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  tableList: tableListProps[];
}
export function MultiTableSelect({
  tableList,
  ...props
}: MultiTableSelectProps) {
  const [tables, setTables] = useState<tableListProps[]>(tableList);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedTables, setSelectedTables] = useState<tableListProps[]>([]);
  const [unselectedTables, setUnselectedTables] = useState<tableListProps[]>(
    [],
  );
  useEffect(() => {
    let count = 0;
    let selected: tableListProps[] = [];
    let unselected: tableListProps[] = [];
    tables.forEach((table) => {
      if (table.selected) {
        count++;
        selected.push(table);
      } else {
        unselected.push(table);
      }
    });
    setSelectedCount(count);
    setSelectedTables(selected);
    setUnselectedTables(unselected);
  }, [tables]);

  const handleTableChange = (newTable: tableListProps) => {
    const newTables = [...tables];

    newTables.forEach((table) => {
      if (table.tableName === newTable.tableName) {
        table.selected = !table.selected;
      }
    });

    setTables(newTables);
  };

  return (
    <div className={`${manrope.className}`} {...props}>
      <div className="space-y-[6px]">
        <span className="text-xs text-[#A1A1AA] text-muted-foreground">
          Selected Tables ({selectedCount})
        </span>
        <div className="flex flex-wrap gap-[6px]">
          <AnimatePresence>
            {selectedTables.map((table) => (
              <motion.div
                key={table.tableName}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <TagChip
                  tableName={table.tableName}
                  onRemove={() => handleTableChange(table)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <SearchBar placeholder="Search and select table" />
        <AnimatePresence>
          {unselectedTables.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border border-[#27272A] bg-[#09090B] rounded-sm p-1 max-h-[200px] overflow-y-auto custom-scrollbar"
            >
              <AnimatePresence>
                {unselectedTables.map((table) => (
                  <motion.div
                    key={table.tableName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleTableChange(table)}
                    className="flex items-center hover:cursor-pointer rounded-sm gap-[10px] bg-[#09090B] hover:bg-[#A1A1AA] hover:text-[#09090B] transition-all duration-200 px-3 py-2 text-[#A1A1AA] text-muted-foreground"
                  >
                    <TableProperties className="h-4 w-4" />
                    <span className="text-[10px]">{table.tableName}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
