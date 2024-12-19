import type { Meta, StoryObj } from "@storybook/react";
import { TagChip } from "~/app/_components/ui/tagChip";   

const meta: Meta<typeof TagChip> = {
  title: "Components/CanvasElements/TagChip",
  component: TagChip,
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
type Story = StoryObj<typeof TagChip>;


export const Resting: Story = {
  args: {
    tableName: "core.transactions",
  },
};


