import type { Meta, StoryObj } from "@storybook/react";
import { QuickStartUploadTable } from "~/app/_components/ui/QuickStartUploadTable";

const meta: Meta<typeof QuickStartUploadTable> = {
  title: "Components/Quickstart/QuickStartUploadTable",
  component: QuickStartUploadTable,
  decorators: [
    (Story) => (
      <div className="max-w-[600px] max-h-[600px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Upload Table UI component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickStartUploadTable>;

export const Resting: Story = {
  args: {},
};
