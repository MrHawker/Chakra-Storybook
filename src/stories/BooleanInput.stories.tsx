import type { Meta, StoryObj } from "@storybook/react";
import { BooleanInput } from "~/app/_components/ui/BooleanInput";

const meta: Meta<typeof BooleanInput> = {
  title: "Components/CanvasElements/chakraInputsDropdowns/BooleanInput",
  component: BooleanInput,
  decorators: [
    (Story) => (
      <div className="max-w-[400px] max-h-[400px] min-w-[600px]">
        <Story />
      </div>
    ),
  ],
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
type Story = StoryObj<typeof BooleanInput>;

export const Default: Story = {
  args: {
    
  },
};
