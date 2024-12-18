import { Manrope } from "next/font/google";
import { Button } from "./button";
import { TextCursorIcon } from "lucide-react";
const manrope = Manrope({
  subsets: ["latin"],
});
export function BooleanInput() {
  return (
    <div
      className={`rounded-sm border border-inputBorderBackground bg-inputContainerBg p-1 pt-2 ${manrope.className} items-center space-y-2`}
    >
      {" "}
      <div className="flex items-center justify-between pr-1">
        <label className="flex items-center space-x-1 p-1 text-sm font-medium text-inputLabel">
          <TextCursorIcon width={16} height={16} />
          <span className="flex items-center space-x-1">
            <span>Boolean</span>
            <span className="text-destructive">*</span>
          </span>
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Button className="w-full bg-[#022C22] text-sm rounded-sm font-medium text-[#10B981] hover:bg-[#10B981] hover:text-[#022C22]">
          ON
        </Button>
        <Button className="w-full bg-[#450A0A] text-sm rounded-sm font-medium text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A]">
          OFF
        </Button>
      </div>
    </div>
  );
}
