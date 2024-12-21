import type { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "~/app/_components/ui/TopBar";

const meta: Meta<typeof TopBar> = {
  title: "Components/CanvasElements/TopBar",
  component: TopBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable TopBar component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Resting: Story = {
  args: {
    
  },
};
