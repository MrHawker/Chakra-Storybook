import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "~/app/_components/ui/Menu";

const meta: Meta<typeof Menu> = {
  title: "Components/Workspaces/Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <div className="max-w-[800px] max-h-[800px] min-w-[600px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Menu component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const GridDisplay: Story = {
  args: {
    list: false,
  },
};

export const ListDisplay: Story = {
  args: {
    list: true,
  },
};
