import type { Meta, StoryObj } from "@storybook/react";
import { QuickStartMenu } from "~/app/_components/ui/QuickStartMenu";

const meta: Meta<typeof QuickStartMenu> = {
  title: "Components/Quickstart/QuickStartMenu",
  component: QuickStartMenu,
  decorators: [
    (Story) => (
      <div className="max-w-[600px] max-h-[600px]">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A reusable OptionalConfigurations component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickStartMenu>;

export const Resting: Story = {
  args: {
    
  },
};



