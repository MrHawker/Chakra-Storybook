import type { Meta, StoryObj } from "@storybook/react";
import { QuickStartFooter } from "~/app/_components/ui/QuickStartFooter";

const meta: Meta<typeof QuickStartFooter> = {
  title: "Components/Quickstart/QuickStartFooter",
  component: QuickStartFooter,
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
type Story = StoryObj<typeof QuickStartFooter>;

export const Resting: Story = {
  args: {
    
  },
};



