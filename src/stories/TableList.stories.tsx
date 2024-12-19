import type { Meta, StoryObj } from "@storybook/react";
import { Snowflake } from "lucide-react";
import { List } from "~/app/_components/ui/List";
import { TableList } from "~/app/_components/ui/TableList";

const meta: Meta<typeof TableList> = {
  title: "Components/Workspaces/TableList",
  component: TableList,
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
type Story = StoryObj<typeof TableList>;

export const Resting: Story = {
  args: {
    columns: ["Name", "Last Run", "Created By", "Actions",'Integrations'],
    rows: [
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks","Databricks"],
      },
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "23 hours 43 minutes ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks","Databricks"],
        running: true,
      },
      {
        name: "ETH-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks"],
      },
      {
        name: "BTC-Snowflake-Pipeline",
        lastRun: "12 Minutes Ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks","Databricks"],
      },
      {
        name: "ETH-Snowflake-Pipeline",
        lastRun: "23 hours 43 minutes ago",
        createdBy: "Faisal",
        actions: "TableList",
        integration: ["Snowflake", "S3", "Databricks"],
        running: true,
      },
    ],
  },
};
