import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/app/_components/ui/button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Casd",
    
  },
};
