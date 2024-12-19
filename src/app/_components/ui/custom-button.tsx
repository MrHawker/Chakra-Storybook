import { Manrope } from "next/font/google";
import { Button } from "./button";
import { House } from "lucide-react";
import Spinner from "~/stories/icons/spinner";
import { CheckCheck } from "lucide-react";
import { useState } from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "destructive" | "warning" | "outline" | "filled" | "info";
  state?: "resting" | "disabled" | "loading" | "success";
}
const manrope = Manrope({
  subsets: ["latin"],
});
export function CustomButton({
  children,
  variant,
  state = "resting",
}: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<
    "resting" | "disabled" | "loading" | "success"
  >(state);
  return (
    <Button
      onClick={() => {
        if (buttonState === "resting") {
          setButtonState("loading");
        }
      }}
      className={`${
        variant === "destructive" &&
        `bg-buttonDestructive text-buttonDestructiveHover hover:text-buttonDestructive hover:bg-buttonDestructiveHover ${(buttonState === "loading" || buttonState === "success" || buttonState === "disabled") && "text-buttonDestructive bg-buttonDestructiveHover pointer-events-none"}`
      } ${
        variant === "filled" &&
        `bg-buttonPrimary text-buttonPrimaryText hover:bg-buttonPrimaryHover ${(buttonState === "loading" || buttonState === "success" || buttonState === "disabled") && "text-buttonPrimaryText bg-buttonPrimaryHover pointer-events-none"}`
      } ${
        variant === "outline" &&
        `border-buttonOutline text-buttonOutline hover:bg-buttonOutlineHover border bg-transparent ${(buttonState === "loading" || buttonState === "success" || buttonState === "disabled") && "text-buttonOutline bg-buttonOutlineHover pointer-events-none"}`
      } ${buttonState === "disabled" && "border-buttonOutline text-buttonOutline border bg-transparent opacity-30"} ${
        variant === "info" &&
        `bg-buttonInfo text-buttonInfoHover hover:bg-buttonInfoHover hover:text-buttonInfo ${(buttonState === "loading" || buttonState === "success" || buttonState === "disabled") && "text-buttonInfoText bg-buttonInfoHover pointer-events-none"}`
      } ${buttonState === "disabled" && "border-buttonInfo border opacity-30"} ${
        variant === "warning" &&
        `bg-buttonWarning text-buttonWarningHover hover:bg-buttonWarningHover hover:text-buttonWarning ${(buttonState === "loading" || buttonState === "success" || buttonState === "disabled") && "text-buttonWarningText bg-buttonWarningHover pointer-events-none"}`
      } ${buttonState === "disabled" && "border-buttonWarning border opacity-30"} ${manrope.className} rounded-sm font-semibold`}
    >
      {(buttonState === "resting" || buttonState === "disabled") && <House />}
      {children}
      {(buttonState === "resting" || buttonState === "disabled") && <House />}
      {buttonState === "loading" && <Spinner />}
      {buttonState === "success" && <CheckCheck />}
    </Button>
  );
}
