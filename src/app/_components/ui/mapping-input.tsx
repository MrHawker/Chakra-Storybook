import { useState } from "react";

("use client");

import { Manrope } from "next/font/google";
import React from "react";
import { Dropdown } from "./dropdown";
import { MapCol } from "~/stories/icons/MapCol";
import { MapRow } from "~/stories/icons/MapRow";
import { S3 } from "~/stories/icons/s3";
import { Databricks } from "~/stories/icons/databricks";
import { Snowflake } from "~/stories/icons/snowflake";
import { RightArrow } from "~/stories/icons/RightArrow";
import { Button } from "./button";

const manrope = Manrope({
  subsets: ["latin"],
});

interface MappingInputProps {
  mappingRow?: boolean;
  disabled?: boolean;
  required?: boolean;
  dismissable?: boolean;
  initialMapCount?: number;
}
const MappingInput = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & MappingInputProps
>(
  ({
    mappingRow,
    disabled,
    required,
    dismissable,
    initialMapCount = 1,
    ...props
  }: MappingInputProps) => {
    const [mapCount, setMapCount] = useState(initialMapCount);
    return (
      <div
        className={`space-y-2 rounded-sm bg-[#09090B] p-1 pt-2 ${manrope.className} border border-inputText`}
      >
        <div className="text-inputMutedForeGround flex gap-1">
          {mappingRow ? <MapRow /> : <MapCol />}
          {mappingRow ? (
            <span className="text-sm font-medium">Map Row</span>
          ) : (
            <span className="text-sm font-medium">Map Column</span>
          )}
          {required && <span className="text-destructive"> *</span>}
        </div>
        {Array.from({ length: mapCount }).map((_, index) => (
          <div className="flex gap-2 rounded-sm border border-inputBorderBackground bg-inputContainerBg">
            <Dropdown
              className="border-none"
              trigger="Select Source"
              label="Source"
              required
              items={[
                { label: "S3", icon: S3 },
                { label: "Databricks", icon: Databricks },
                { label: "Snowflake", icon: Snowflake },
                { label: "MongoDB", icon: S3 },
              ]}
            />
            <div className="mt-[59px]">
              <RightArrow />
            </div>
            <Dropdown
              dismissable
              className="border-none"
              trigger="Select Destination"
              label="Destination"
              required
              items={[
                { label: "S3", icon: S3 },
                { label: "Databricks", icon: Databricks },
                { label: "Snowflake", icon: Snowflake },
                { label: "MongoDB", icon: S3 },
              ]}
            />
          </div>
        ))}
        {!mappingRow && (
          <Button
            onClick={() => setMapCount(mapCount + 1)}
            className="flex w-full gap-2 border-2 border-inputText bg-transparent text-inputText"
          >
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
                d="M2.66699 8.00004C2.66699 7.63185 2.96547 7.33337 3.33366 7.33337H12.667C13.0352 7.33337 13.3337 7.63185 13.3337 8.00004C13.3337 8.36823 13.0352 8.66671 12.667 8.66671H3.33366C2.96547 8.66671 2.66699 8.36823 2.66699 8.00004Z"
                fill="#52525B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99967 2.66663C8.36786 2.66663 8.66634 2.9651 8.66634 3.33329V12.6666C8.66634 13.0348 8.36786 13.3333 7.99967 13.3333C7.63148 13.3333 7.33301 13.0348 7.33301 12.6666V3.33329C7.33301 2.9651 7.63148 2.66663 7.99967 2.66663Z"
                fill="#52525B"
              />
            </svg>
            Add More Columns
          </Button>
        )}
      </div>
    );
  },
);

export { MappingInput };
