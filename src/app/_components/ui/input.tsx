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
    kind?: "resting" | "disabled" | "valid" | "error" | "info" | "warning";
    errorMsg?: string;
    infoMsg?: string;
    warningMsg?: string;
    dismissable?: boolean;
  }
>(
  (
    {
      className,
      type,
      placeholder,
      required,
      label,
      kind,
      errorMsg,
      infoMsg,
      warningMsg,
      dismissable,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={`rounded-sm border border-inputBorderBackground bg-inputContainerBg p-1 pt-2 ${manrope.className} space-y-2 ${kind === "disabled" ? "opacity-30" : ""} `}
      >
        <div className="flex items-center justify-between pr-1">
          <label className="flex space-x-1 p-1 text-sm font-medium text-inputLabel">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6663 1.99996C10.1359 1.99996 9.6272 2.21067 9.25213 2.58575C8.87705 2.96082 8.66634 3.46953 8.66634 3.99996V12C8.66634 12.5304 8.87705 13.0391 9.25213 13.4142C9.6272 13.7892 10.1359 14 10.6663 14H11.333C11.7012 14 11.9997 14.2984 11.9997 14.6666C11.9997 15.0348 11.7012 15.3333 11.333 15.3333H10.6663C9.78229 15.3333 8.93444 14.9821 8.30932 14.357C7.6842 13.7319 7.33301 12.884 7.33301 12V3.99996C7.33301 3.1159 7.6842 2.26806 8.30932 1.64294C8.93444 1.01782 9.78229 0.666626 10.6663 0.666626H11.333C11.7012 0.666626 11.9997 0.965103 11.9997 1.33329C11.9997 1.70148 11.7012 1.99996 11.333 1.99996H10.6663Z"
                fill="#A1A1AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 10.6666C8.36819 10.6666 8.66667 10.9651 8.66667 11.3333V12C8.66667 12.884 8.31548 13.7319 7.69036 14.357C7.06524 14.9821 6.21739 15.3333 5.33333 15.3333H4.66667C4.29848 15.3333 4 15.0348 4 14.6666C4 14.2984 4.29848 14 4.66667 14H5.33333C5.86377 14 6.37247 13.7892 6.74755 13.4142C7.12262 13.0391 7.33333 12.5304 7.33333 12V11.3333C7.33333 10.9651 7.63181 10.6666 8 10.6666Z"
                fill="#A1A1AA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 1.33329C4 0.965103 4.29848 0.666626 4.66667 0.666626H5.33333C6.21739 0.666626 7.06524 1.01782 7.69036 1.64294C8.31548 2.26806 8.66667 3.1159 8.66667 3.99996V4.66663C8.66667 5.03482 8.36819 5.33329 8 5.33329C7.63181 5.33329 7.33333 5.03482 7.33333 4.66663V3.99996C7.33333 3.46953 7.12262 2.96082 6.74755 2.58575C6.37247 2.21067 5.86377 1.99996 5.33333 1.99996H4.66667C4.29848 1.99996 4 1.70148 4 1.33329Z"
                fill="#A1A1AA"
              />
            </svg>
            <span className="ml-2">
              {label}
              {required && <span className="text-destructive"> *</span>}
            </span>
          </label>
          {dismissable && <DeleteIcon />}
        </div>

        <div
          className={`flex items-center justify-between rounded-sm border border-inputBorderBackground bg-inputBackground p-3 focus-within:border-inputFocus ${kind === "valid" ? "border-inputValid" : ""} ${kind === "error" ? "border-inputErrorBorder bg-inputError" : ""} ${kind === "info" ? "border-inputInfo bg-inputInfoBg" : ""} ${kind === "warning" ? "border-inputWarning bg-inputWarningForeGround" : ""} `}
        >
          <input
            type={type}
            className={cn(
              "flex w-full bg-transparent text-sm font-medium text-inputText text-muted placeholder:text-inputText focus:outline-none",
              className,
              kind === "error" ? "text-destructive" : "",
              kind === "info" ? "text-inputInfo" : "",
              kind === "warning" ? "text-inputWarning" : "",
            )}
            disabled={kind === "disabled"}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {kind === "resting" ? (
            <InfoIcon />
          ) : kind === "error" ? (
            <StopIcon kind="error" />
          ) : kind === "info" ? (
            <StopIcon kind="info" />
          ) : kind === "warning" ? (
            <StopIcon kind="warning" />
          ) : kind === "valid" ? (
            <CheckmarkIcon />
          ) : (
            <></>
          )}
        </div>
        {kind === "error" && (
          <div className="flex items-center space-x-1 px-[6px]">
            <StopIcon kind="error" />
            {
              <p className="text-sm text-destructive">
                {errorMsg ? errorMsg : "Something went wrong"}
              </p>
            }
          </div>
        )}
        {kind === "info" && (
          <div className="flex items-center space-x-1 px-[6px]">
            <StopIcon kind="info" />
            {
              <p className="text-sm text-inputInfo">
                {infoMsg ? infoMsg : "Hi"}
              </p>
            }
          </div>
        )}
        {kind === "warning" && (
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
