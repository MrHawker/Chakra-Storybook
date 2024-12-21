import type { Meta, StoryObj } from "@storybook/react";
import { Scheduler } from "~/app/_components/ui/Scheduler";

const meta: Meta<typeof Scheduler> = {
  title: "Components/CanvasElements/Scheduler",
  component: Scheduler,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Scheduler component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Scheduler>;

export const NoSchedule: Story = {
  args: {
    
    intialState: "noSchedule",
  },
};

export const HasSchedule: Story = {
  args: {
    intialState: "hasSchedule",
  },
};
