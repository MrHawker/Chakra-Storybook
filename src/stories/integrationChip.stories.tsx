import type { Meta, StoryObj } from "@storybook/react";
import { IntegrationChip } from "~/app/_components/ui/integrationChip";

const meta: Meta<typeof IntegrationChip> = {
  title: "Components/CanvasElements/chakraInputsDropdowns/integrationChip",
  component: IntegrationChip,
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
type Story = StoryObj<typeof IntegrationChip>;

export const Enabled: Story = {
  args: {
    state: "enabled",
  },
};

export const Edit: Story = {
  args: {
    state: "edit",
  },
};

