"use client";
import * as React from "react";

import { cn } from "~/lib/utils";
import { Manrope } from "next/font/google";
import { InfoIcon } from "~/stories/icons/info";
import { StopIcon } from "~/stories/icons/stop";
import { DeleteIcon } from "~/stories/icons/delete";
import { CheckmarkIcon } from "~/stories/icons/checkmark";
import { useEffect, useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
});

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    label?: string;
    labelIcon?: React.ReactNode;
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
      errorMsg,
      infoMsg,
      warningMsg,
      placeholder,
      required,
      label,
      labelIcon,
      dismissable,
      description,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState<string>(props.value?.toString() || "");
    const [state, setState] = useState<
      "resting" | "disabled" | "valid" | "error" | "info" | "warning"
    >("resting");
    
    useEffect(() => {
      if (value.length === 0) {
        setState("resting");
      }
      if (value.length > 0 && state !== "disabled") {
        setState("valid");
      }
      if (infoMsg && infoMsg.length > 0) {
        setState("info");
      }
      if (warningMsg && warningMsg.length > 0) {
        setState("warning");
      }
      if (errorMsg && errorMsg.length > 0) {
        setState("error");
      }
      if(props.disabled) {
        setState("disabled");
      }
    }, [value, infoMsg, warningMsg, errorMsg,props.disabled]);

    return (
      <div
        className={`w-full rounded-sm border border-inputBorderBackground bg-inputContainerBg p-1 pt-2 ${manrope.className} space-y-2 ${state === "disabled" ? "opacity-30" : ""} `}
      >
        <div className="flex items-center justify-between pr-1">
          <label className="flex items-center space-x-1 p-1 text-sm font-medium text-inputLabel">
            {labelIcon}
            <span className="ml-2">
              {label}
              {required && <span className="text-destructive"> *</span>}
            </span>
          </label>
          {dismissable && <DeleteIcon />}
        </div>
        {description && (
          <p className="px-[6px] text-xs text-[#52525B]">{description}</p>
        )}
        <div
          className={`flex items-center justify-between rounded-sm border border-inputBorderBackground bg-inputBackground p-3 transition-all duration-200 focus-within:border-inputFocus ${state === "valid" ? "border-inputValid" : ""} ${state === "error" ? "border-inputErrorBorder bg-inputError" : ""} ${state === "info" ? "border-inputInfo bg-inputInfoBg" : ""} ${state === "warning" ? "border-inputWarning bg-inputWarningForeGround" : ""} `}
        >
          <input
            
            className={cn(
              "flex w-full bg-transparent text-sm font-medium text-inputText text-muted placeholder:text-inputText focus:outline-none",
              className,
              state === "error" ? "text-destructive" : "",
              state === "info" ? "text-inputInfo" : "",
              state === "warning" ? "text-inputWarning" : "",
            )}
            
            ref={ref}
            placeholder={placeholder}
            {...props}
            value={value}
            onChange={(e) =>{ setValue(e.target.value)}}
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
              <p className="text-sm text-inputWarning">
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
