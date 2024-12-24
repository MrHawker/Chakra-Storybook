import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "~/app/_components/ui/dropdown";
import { LightningBolt } from "./icons/lightningbolt";
import { S3 } from "./icons/s3";
import { Databricks } from "./icons/databricks";
import { Snowflake } from "./icons/snowflake";

const meta: Meta<typeof Dropdown> = {
  title: "Components/CanvasElements/chakraInputsDropdowns/Dropdown",
  decorators: [
    (Story) => (
      <div className="max-w-[400px] max-h-[400px] min-w-[200px]">
        <Story />
      </div>
    ),
  ],
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A reusable Dropdown component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Integration Types",
    required: true,
    items: [
      { label: "S3", icon: S3 },
      { label: "Databricks", icon: Databricks },
      { label: "Snowflake", icon: Snowflake },
      { label: "MongoDB", icon: S3 },
    ],
  },
};
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
export const Selected: Story = {
  args: {
    ...Default.args,
    selected: { label: "S3", icon: S3 },
  },
};

