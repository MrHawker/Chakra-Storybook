import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "~/app/_components/ui/custom-button";

const meta: Meta<typeof CustomButton> = {
  title: "Components/Buttons/warningBtn", 
  component: CustomButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A reusable Button component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Resting: Story = {
  args: {
    variant: "warning",
    children: "Warning",
    state: "resting",
  },
};

export const Disabled: Story = {
  args: {
    ...Resting.args,
    state: "disabled",
  },
};

export const Loading: Story = {
  args: {
    ...Resting.args,
    state: "loading",
  },
};

export const Success: Story = {
  args: {
    ...Resting.args,
    state: "success",
  },
};
