import type { Meta, StoryObj } from "@storybook/react";
import { Snowflake } from "lucide-react";
import { List } from "~/app/_components/ui/List";

const meta: Meta<typeof List> = {
  title: "Components/Workspaces/List",
  
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Button component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Resting: Story = {
  args: {
    name: "BTC-Snowflake-Pipeline",
    lastRun: "12 Minutes Ago",
    createdBy: "Faisal",
    actions: "TableList",
    integration: ["Snowflake", "S3", "Databricks","Databricks"],
  },
};
export const Running: Story = {
  args: {
    ...Resting.args,
    running: true,
  },
};
