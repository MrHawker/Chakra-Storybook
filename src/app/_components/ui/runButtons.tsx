import { Manrope } from "next/font/google";
import { Button } from "./button";
import { House, PanelRightOpen, Play, RefreshCcw, TimerReset } from "lucide-react";
import Spinner from "~/stories/icons/spinner";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

interface RunButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  state?: "resting" | "loading" | "retry" | "finished" | "reset";
  className?: string;
  setState?: React.Dispatch<
    React.SetStateAction<"resting" | "loading" | "retry" | "finished" | "reset">
  >;
}
const manrope = Manrope({
  subsets: ["latin"],
});

export function RunButton({
  children,
  state = "resting",
  setState,
  className,
  ...buttonProps
}: RunButtonProps) {
  const [buttonState, setButtonState] = useState<
    "resting" | "loading" | "retry" | "finished" | "reset"
  >(state);
  if (state === "loading" || state === "resting") {
    return (
      <Button
        {...buttonProps}
        className={`text-semibold space-x-2 rounded border border-[#022C22] bg-[#10B981] px-4 py-2 hover:bg-[#34D399] ${manrope.className} ${className}`}
      >
        {state === "loading" && <Spinner />}
        {state === "resting" && <Play />}

        {children}
      </Button>
    );
  } else if (state === "finished") {
    return (
      <span className={`flex w-fit rounded bg-[#34D399] ${className}`}>
        <Button
        {...buttonProps}
          className={`text-semibold z-10 space-x-2 rounded-none rounded-l rounded-r border border-[#34D399] bg-[#022C22] px-4 py-2 text-[#34D399] hover:bg-[#34D399] hover:text-[#022C22] ${manrope.className}`}
        >
          {state === "finished" && <CheckCheck />}
          {children}
        </Button>
        <Button
        {...buttonProps}
          className={`text-semibold z-0 ml-[-3px] space-x-2 rounded-none rounded-r border border-l-0 border-[#34D399] bg-[#022C22] pl-2 pr-1 text-[#34D399] hover:bg-[#34D399] hover:text-[#022C22] ${manrope.className}`}
        >
          <PanelRightOpen />
        </Button>
      </span>
    );
  } else if (state === "retry") {
    return (
      <span className={`flex w-fit rounded bg-[#450A0A] ${className}`}>
        <Button
        {...buttonProps}
          className={`text-semibold z-10 space-x-2 rounded-none rounded-l rounded-r border border-[#EF4444] bg-[#450A0A] px-4 py-2 text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A] ${manrope.className}`}
        >
          {state === "retry" && <RefreshCcw />}
          {children}
        </Button>
        <Button
          className={`text-semibold z-0 ml-[-3px] space-x-2 rounded-none rounded-r border border-l-0 border-[#EF4444] bg-[#450A0A] py-2 pl-2 pr-1 text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A] ${manrope.className}`}
        >
          <PanelRightOpen />
        </Button>
      </span>
    );
  } else if (state === "reset") {
    return (
      <Button
      {...buttonProps}
        className={`text-semibold space-x-2 rounded border border-[#450A0A] bg-[#450A0A] px-4 py-2 hover:bg-[#EF4444] text-[#EF4444] hover:text-[#450A0A] ${manrope.className} ${className}`}
      >
        <TimerReset />
        {children}
      </Button>
    );
  }
}
