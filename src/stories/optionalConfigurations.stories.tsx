import type { Meta, StoryObj } from "@storybook/react";
import { OptionalConfigurations } from "~/app/_components/ui/optionalConfigurations";

const meta: Meta<typeof OptionalConfigurations> = {
  title: "Components/OptionalConfigurations",
  component: OptionalConfigurations,
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
type Story = StoryObj<typeof OptionalConfigurations>;

export const Closed: Story = {
  args: {
    open: false,
  },
};

export const Open: Story = {
  args: {
    open: true,
  },
};


