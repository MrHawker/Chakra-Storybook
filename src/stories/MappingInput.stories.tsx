import type { Meta, StoryObj } from "@storybook/react";

import { S3 } from "./icons/s3";
import { Databricks } from "./icons/databricks";
import { Snowflake } from "./icons/snowflake";
import { MappingInput } from "~/app/_components/ui/mapping-input";

const meta: Meta<typeof MappingInput> = {
  title: "Components/CanvasElements/chakraInputsDropdowns/Mapping",
  component: MappingInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A reusable Mapping component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MappingInput>;

export const RowMapping: Story = {
  args: {
    mappingRow: true,
    required: true,
  },
};
export const ColumnMapping: Story = {
  args: {
    mappingRow: false,
    required: true,
    initialMapCount:1,
    dismissable: true,
  },
};
