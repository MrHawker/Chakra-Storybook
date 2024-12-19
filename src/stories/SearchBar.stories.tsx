import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "~/app/_components/ui/SearchBar";   

const meta: Meta<typeof SearchBar> = {
  title: "Components/CanvasElements/SearchBar",
  component: SearchBar,
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
type Story = StoryObj<typeof SearchBar>;


export const Resting: Story = {
  args: {
    
  },
};


