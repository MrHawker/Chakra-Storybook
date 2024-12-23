import type { Meta, StoryObj } from "@storybook/react";
import { APIDocsTab } from "~/app/_components/ui/APIDocsTab";

const meta: Meta<typeof APIDocsTab> = {
  title: "Components/Workspaces/APIDocsTab",
  component: APIDocsTab,
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
type Story = StoryObj<typeof APIDocsTab>;

export const Resting: Story = {
  args: {
    apiKey: "dw_prod_8f4k2p9x7v3m1q5n6t8h4w9c2y5r7j3l",
    bashCode: `curl -X POST https://dw.company.com/api/trigger \\ 
      -H "Authorization: Bearer dw_prod_8f4k2p9x7v3m1q5n6t8h4w9c2y5r7j3l" \\
      -H "Content-Type: application/json" \\
      -d '{"action": "refresh", "tables": ["sales", "inventory"]}'`,
  },
};

