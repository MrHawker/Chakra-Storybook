import type { Meta, StoryObj } from "@storybook/react";
import { APIKey } from "~/app/_components/ui/APIKey";

const meta: Meta<typeof APIKey> = {
  title: "Components/Workspaces/APIKey",
  component: APIKey,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable APIKey component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof APIKey>;

export const Resting: Story = {
  args: {
    apiKey: "dw_prod_8f4k2p9x7v3m1q5n6t8h4w9c2y5r7j3l",
  },
};

