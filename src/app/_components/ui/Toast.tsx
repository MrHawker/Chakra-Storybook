import { Home } from "lucide-react";
import { Manrope } from "next/font/google";
import { Button } from "./button";
import { Progress } from "./progress";
import { BlockLoader } from "~/stories/icons/blockLoader";

const manrope = Manrope({
  subsets: ["latin"],
});
interface ToastProps {
  type: "destructive" | "success" | "info" | "neutral";
  title: string;
  description: string;
  button: boolean;
  icon: boolean;
  loadingBar: boolean;
}
export function Toast({
  type,
  title,
  description,
  button,
  icon,
  loadingBar,
}: ToastProps) {
  return (
    <div
      className={`${manrope.className} transition-all duration-300 flex items-center gap-4 rounded p-6 pr-8 shadow-lg ${type === "destructive" ? "border-[#EF4444] bg-[#450A0A] text-[#EF4444]" : type === "success" ? "border-[#14B8A6] bg-[#042F2E] text-[#14B8A6]" : type === "info" ? "border-[#06B6D4] bg-[#083344] text-[#06B6D4]" : "border-white bg-[#09090B] text-white"} `}
    >
      <div className="flex w-full flex-grow items-stretch gap-4">
        {icon && (
          <div className="flex items-center justify-center">
            <Home className="h-8 w-8" />
          </div>
        )}
        {loadingBar && (
          <div className="mt-1 flex h-full items-start">
            <BlockLoader
              iconColor={
                type === "destructive"
                  ? "#EF4444"
                  : type === "success"
                    ? "#14B8A6"
                    : type === "info"
                      ? "#06B6D4"
                      : "#34D399"
              }
            />
          </div>
        )}
        <div className={`w-full ${loadingBar ? "space-y-3" : "space-y-1"}`}>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm font-light">{description}</p>
          {loadingBar && (
            <Progress
              value={90}
              className="h-[5px] w-full border-none bg-[#52525B]"
              indicatorClassName={
                type === "destructive"
                  ? "bg-[#EF4444]"
                  : type === "success"
                    ? "bg-[#14B8A6]"
                    : type === "info"
                      ? "bg-[#06B6D4]"
                      : "bg-[#34D399]"
              }
            />
          )}
          {loadingBar && (
            <p className="flex justify-between text-sm font-light text-[#A1A1AA]">
              <span>90% complete</span>
              <span>About 4 Minutes Left</span>
            </p>
          )}
        </div>
      </div>
      {button && (
        <span className={`flex items-center`}>
          <Button
            className={`rounded-sm border px-4 py-2 text-sm font-semibold ${type === "destructive" ? "border-[#EF4444] bg-[#450A0A] text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A]" : type === "success" ? "border-[#14B8A6] bg-[#042F2E] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#042F2E]" : type === "info" ? "border-[#06B6D4] bg-[#083344] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#083344]" : "border-white bg-[#09090B] text-white hover:bg-white hover:text-[#09090B]"}`}
          >
            <Home className="h-4 w-4" />
            <span>Button text</span>
          </Button>
        </span>
      )}
    </div>
  );
}
