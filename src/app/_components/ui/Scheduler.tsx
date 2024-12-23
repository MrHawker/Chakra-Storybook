"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import { ChevronDown, ChevronsDown, ChevronsUp, Clock } from "lucide-react";
import { Button } from "./button";
import { RunButton } from "./runButtons";

const manrope = Manrope({
  subsets: ["latin"],
});
interface SchedulerProps {
  intialState?: "noSchedule" | "hasSchedule";
  expandedAtFirst?: boolean;
}

export function Scheduler({
  intialState = "noSchedule",
  expandedAtFirst = false,
}: SchedulerProps) {
  const [isOpen, setIsOpen] = useState(expandedAtFirst);

  const [formValues, setFormValues] = useState({
    timeFrequency: "",
    cronExpression: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className={`${manrope.className} relative`}>
      <div
        className={`flex h-10 min-w-[320px] items-center rounded border border-[#27272A] bg-[#18181B] px-3 py-[6px] text-white`}
      >
        <span className="flex flex-grow font-light">Canvas_1</span>
        <div className="flex items-stretch space-x-2">
          <div
            className={`flex cursor-pointer items-center gap-1 rounded-sm p-[6px] transition-all duration-200 hover:bg-[#27272A] ${
              intialState === "noSchedule" && isOpen
                ? "bg-transparent"
                : intialState === "hasSchedule"
                  ? "bg-[#064E3B]"
                  : "bg-[#09090B]"
            } `}
          >
            <Clock className="flex h-[16px] w-[16px] rounded-md text-white" />
            {intialState === "hasSchedule" && (
              <span className="text-xs">Every 7 days</span>
            )}
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center rounded-sm bg-[#27272A] p-[6px]"
          >
            {isOpen ? (
              <ChevronsUp className="flex h-[16px] w-[16px] rounded-md text-white" />
            ) : (
              <ChevronsDown className="flex h-[16px] w-[16px] rounded-md text-white" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute mt-1 w-full origin-top transform space-y-2 overflow-hidden rounded border border-[#27272A] bg-[#18181B] p-1 pt-2 text-white transition-all duration-200 ${
          isOpen
            ? "max-h-[500px] scale-y-100 opacity-100"
            : "max-h-0 scale-y-0 opacity-0"
        }`}
      >
        <div className="space-y-2">
          <p className="flex items-center gap-1 px-1 text-sm font-semibold text-[#A1A1AA]">
            <Clock className="h-[16px] w-[16px]" />
            <span>Schedule</span>
          </p>
          <p className="text-whie px-2 text-xs text-[#A1A1AA]">
            Set a Cadence for this block to run at set intervals
          </p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              required
              name="timeFrequency"
              value={formValues.timeFrequency}
              onChange={handleInputChange}
              className="w-full rounded border border-[#27272A] bg-[#09090B] px-4 py-3 text-xs text-white outline-none placeholder:text-[#52525B]"
              placeholder="Enter the Time/Frequency"
            />
            <input
              required
              name="cronExpression"
              value={formValues.cronExpression}
              onChange={handleInputChange}
              className="w-full rounded border border-[#27272A] bg-[#09090B] px-4 py-3 text-xs text-[#10B981] outline-none placeholder:text-[#52525B]"
              placeholder="0 0 * * SUN"
            />
            {intialState === "noSchedule" && (
              <Button
                type="submit"
                disabled={
                  !formValues.timeFrequency || !formValues.cronExpression
                }
                className="text-md w-full rounded-sm bg-[#10B981] font-semibold text-[#064E3B] hover:bg-[#064E3B] hover:text-[#10B981]"
              >
                Submit
              </Button>
            )}
            {intialState === "hasSchedule" && (
              <span className="flex gap-2">
                <RunButton
                  disabled={
                    !formValues.timeFrequency || !formValues.cronExpression
                  }
                  className="w-full font-semibold text-[#064E3B]"
                >
                  Manual RUN
                </RunButton>
                <RunButton
                  disabled={
                    !formValues.timeFrequency || !formValues.cronExpression
                  }
                  state="reset"
                  className="w-full"
                >
                  Reset
                </RunButton>
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
