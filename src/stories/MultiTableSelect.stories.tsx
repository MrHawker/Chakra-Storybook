import type { Meta, StoryObj } from "@storybook/react";
import { MultiTableSelect } from "~/app/_components/ui/MultiTableSelect";   

const meta: Meta<typeof MultiTableSelect> = {
  title: "Components/CanvasElements/MultiTableSelect",
  component: MultiTableSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable SearchBar component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiTableSelect>;


export const Resting: Story = {
  args: {
    tableList: [
      { tableName: "core.transactions", selected: true },
      { tableName: "core.accounts", selected: false },
      { tableName: "core.customers", selected: false },
    ],
  },
};

export const TwoSelected: Story = {
    args: {
      tableList: [
        { tableName: "core.transactions", selected: true },
        { tableName: "core.accounts", selected: true },
        { tableName: "core.customers", selected: false },
        { tableName: "core.table1", selected: false },
        { tableName: "core.table2", selected: false },
        { tableName: "core.table3", selected: false },
        { tableName: "core.table4", selected: false },
        { tableName: "core.table5", selected: false },
        { tableName: "core.table6", selected: false },
        { tableName: "core.table7", selected: false },
        { tableName: "core.table8", selected: false },
      ],
    },
  };
  
export const NoTables: Story = {
  args: {
    tableList: [],
  },
};
export const NoUnselectedTables: Story = {
  args: {
    tableList: [
      { tableName: "core.transactions", selected: true },
      { tableName: "core.accounts", selected: true },
    ],
  },
};
export const NoSelectedTables: Story = {
  args: {
    tableList: [
      { tableName: "core.transactions", selected: false },
      { tableName: "core.accounts", selected: false },
    ],
  },
};
