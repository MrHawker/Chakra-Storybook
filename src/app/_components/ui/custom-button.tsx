import { Manrope } from "next/font/google";
import { Button } from "./button";
import { House } from 'lucide-react';
import Spinner from "~/stories/icons/spinner";
import { CheckmarkIcon } from "~/stories/icons/checkmark";
import { CheckCheck } from 'lucide-react';

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "destructive" | "warning" | "outline" | "filled" | "info";
  state?: "resting" | "disabled" | "loading" | "success";
}
const manrope = Manrope({
    subsets: ["latin"],
  });
export function CustomButton({ children, variant, state }: CustomButtonProps) {
  return <Button
  className={`${variant === "destructive" 
    && `bg-buttonDestructive text-buttonDestructiveHover hover:text-buttonDestructive hover:bg-buttonDestructiveHover 
    ${(state === "loading" || state === "success" || state === "disabled") && "pointer-events-none text-buttonDestructive bg-buttonDestructiveHover"}` } 
    ${variant === "filled" 
    && `bg-buttonPrimary text-buttonPrimaryText hover:bg-buttonPrimaryHover 
    ${(state === "loading" || state === "success" || state === "disabled") && "pointer-events-none text-buttonPrimaryText bg-buttonPrimaryHover"}` }
    ${variant === "outline" 
    && `bg-transparent border border-buttonOutline text-buttonOutline hover:bg-buttonOutlineHover 
    ${(state === "loading" || state === "success" || state === "disabled") && "pointer-events-none text-buttonOutline bg-buttonOutlineHover"}` }
    ${state === "disabled" && "opacity-30 bg-transparent border border-buttonOutline text-buttonOutline"}
    ${variant === "info" 
    && `bg-buttonInfo text-buttonInfoHover hover:bg-buttonInfoHover hover:text-buttonInfo 
    ${(state === "loading" || state === "success" || state === "disabled") && "pointer-events-none text-buttonInfoText bg-buttonInfoHover"}` }
    ${state === "disabled" && "opacity-30 border border-buttonInfo "}
    ${variant === "warning" 
    && `bg-buttonWarning text-buttonWarningHover hover:bg-buttonWarningHover hover:text-buttonWarning 
    ${(state === "loading" || state === "success" || state === "disabled") && "pointer-events-none text-buttonWarningText bg-buttonWarningHover"}` }
    ${state === "disabled" && "opacity-30 border border-buttonWarning "}
    ${manrope.className} font-semibold rounded-sm`}
  >
    {(state === "resting" || state === "disabled") && <House />}
    {children}
    {(state === "resting" || state === "disabled") && <House />}
    {state === "loading" && <Spinner />}
    {state === "success" && <CheckCheck  />}
  </Button>
}