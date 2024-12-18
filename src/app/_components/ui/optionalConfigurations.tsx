import { Manrope } from "next/font/google";
import { ChevronsUp, DatabaseIcon, EthernetPort, TextCursorIcon } from "lucide-react";
import { ListChecks } from "lucide-react";
import { ChevronsDown } from "lucide-react";
import { useState } from "react";
import { BooleanInput } from "./BooleanInput";
import { Input } from "./input";

const manrope = Manrope({
  subsets: ["latin"],
});
export function OptionalConfigurations({ open = false }: { open: boolean }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <div
      className={`rounded-xl border border-inputBorderBackground p-4 ${manrope.className} overflow-hidden space-y-6`}
    >
      <div className="flex gap-9">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-white">
            <ListChecks />
            <span className="text-xl font-semibold">
              Optional Configurations
            </span>
          </div>
          <p className="text-sm font-medium text-[#A1A1AA] text-muted-foreground">
            Whether you're a data wizard who loves to fine-tune or prefer a
            quick start, we've got you covered! Dive deep or let our smart
            defaults handle it—you can always adjust later.
          </p>
        </div>
        <div
          className={`flex flex-col  ${
            isOpen ? "justify-start" : "justify-end"
          }`}
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center rounded-sm border border-inputBorderBackground p-[10px] text-white hover:cursor-pointer hover:bg-inputContainerBg"
          >
            {isOpen ? (
              <ChevronsUp width={24} height={24} />
            ) : (
              <ChevronsDown width={24} height={24} />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="space-y-2 p-1 pt-2">
          <Input
            label="Port"
            required
            defaultValue="5432"
            state="valid"
            labelIcon={<EthernetPort width={16} height={16} />}
          />
          <Input
            label="Schema"
            labelIcon={<DatabaseIcon width={16} height={16} />}
            placeholder="Give your Integration a name"
            state="resting"
          />
          <BooleanInput />
        </div>
      )}
    </div>
  );
}
