import * as React from "react";

import { cn } from "~/lib/utils";
import { Manrope } from "next/font/google";
import { InfoIcon } from "~/stories/icons/info";
import { StopIcon } from "~/stories/icons/stop";
import { DeleteIcon } from "~/stories/icons/delete";
import { CheckmarkIcon } from "~/stories/icons/checkmark";

const manrope = Manrope({
  subsets: ["latin"],
});

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    label?: string;
    labelIcon?: React.ReactNode;
    state?: "resting" | "disabled" | "valid" | "error" | "info" | "warning";
    errorMsg?: string;
    infoMsg?: string;
    warningMsg?: string;
    dismissable?: boolean;
    description?: string;
  }
>(
  (
    {
      className,
      type,
      placeholder,
      required,
      label,
      labelIcon,
      state,
      errorMsg,
      infoMsg,
      warningMsg,
      dismissable,
      description,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={`rounded-sm w-full border border-inputBorderBackground bg-inputContainerBg p-1 pt-2 ${manrope.className} space-y-2 ${state === "disabled" ? "opacity-30" : ""} `}
      >
        <div className="flex items-center justify-between pr-1">
          <label className="flex space-x-1 p-1 text-sm font-medium text-inputLabel items-center">
            {labelIcon}
            <span className="ml-2">
              {label}
              {required && <span className="text-destructive"> *</span>}
            </span>
          </label>
          {dismissable && <DeleteIcon />}
        </div>
        {description && <p className="text-xs text-[#52525B] px-[6px]">{description}</p>}
        <div
          className={`flex items-center justify-between rounded-sm border border-inputBorderBackground bg-inputBackground p-3 focus-within:border-inputFocus ${state === "valid" ? "border-inputValid" : ""} ${state === "error" ? "border-inputErrorBorder bg-inputError" : ""} ${state === "info" ? "border-inputInfo bg-inputInfoBg" : ""} ${state === "warning" ? "border-inputWarning bg-inputWarningForeGround" : ""} `}
        >
          <input
            type={type}
            className={cn(
              "flex w-full bg-transparent text-sm font-medium text-inputText text-muted placeholder:text-inputText focus:outline-none",
              className,
              state === "error" ? "text-destructive" : "",
              state === "info" ? "text-inputInfo" : "",
              state === "warning" ? "text-inputWarning" : "",
            )}
            disabled={state === "disabled"}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {state === "resting" ? (
            <InfoIcon />
          ) : state === "error" ? (
            <StopIcon kind="error" />
          ) : state === "info" ? (
            <StopIcon kind="info" />
          ) : state === "warning" ? (
            <StopIcon kind="warning" />
          ) : state === "valid" ? (
            <CheckmarkIcon />
          ) : (
            <></>
          )}
        </div>
        {state === "error" && (
          <div className="flex items-center space-x-1 px-[6px]">
            <StopIcon kind="error" />
            {
              <p className="text-sm text-destructive">
                {errorMsg ? errorMsg : "Something went wrong"}
              </p>
            }
          </div>
        )}
        {state === "info" && (
          <div className="flex items-center space-x-1 px-[6px]">
            <StopIcon kind="info" />
            {
              <p className="text-sm text-inputInfo">
                {infoMsg ? infoMsg : "Some info message"}
              </p>
            }
          </div>
        )}
        {state === "warning" && (
          <div className="flex items-center space-x-1 px-[6px]">
            <StopIcon kind="warning" />
            {
              <p className="text-inputWarning text-sm">
                {warningMsg ? warningMsg : "Warning message"}
              </p>
            }
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
