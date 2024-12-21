import type { Meta, StoryObj } from "@storybook/react";
import { RunButton } from "~/app/_components/ui/runButtons";

const meta: Meta<typeof RunButton> = {
  title: "Components/CanvasElements/RunButton",
  component: RunButton,
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
type Story = StoryObj<typeof RunButton>;

export const Resting: Story = {
  args: {
    children: "RUN",
  },
};
export const Loading: Story = {
  args: {
    children: "Running Job",
    state: "loading",
  },
};
export const Finished: Story = {
  args: {
    children: "Finished Job",
    state: "finished",
  },
};
export const Retry: Story = {
  args: {
    children: "Retry",
    state: "retry",
  },
};

