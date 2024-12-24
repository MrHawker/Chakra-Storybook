import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "~/app/_components/ui/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
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
type Story = StoryObj<typeof Toast>;

export const Destructive: Story = {
  args: {
    type: "destructive",
    title: "Error Title",
    description:
      "SubDescription that could give more info or ask them to reach out.",
    button: true,
    icon: true,
    loadingBar: false,
  },
};

export const Success: Story = {
  args: {
    ...Destructive.args,
    type: "success",
  },
};
export const Info: Story = {
  args: {
    ...Destructive.args,
    type: "info",
  },
};
export const Neutral: Story = {
  args: {
    ...Destructive.args,
    type: "neutral",
  },
};
export const DestructiveWithLoadingBar: Story = {
  args: {
    type: "destructive",
    title: "Error Title",
    description:
      "SubDescription that could give more info or ask them to reach out.",
    button: false,
    icon: false,
    loadingBar: true,
  },
};
export const SuccessWithLoadingBar: Story = {
  args: {
    ...DestructiveWithLoadingBar.args,
    type: "success",
  },
};
export const InfoWithLoadingBar: Story = {
  args: {
    ...DestructiveWithLoadingBar.args,
    type: "info",
  },
};
export const NeutralWithLoadingBar: Story = {
  args: {
    ...DestructiveWithLoadingBar.args,
    type: "neutral",
  },
};
