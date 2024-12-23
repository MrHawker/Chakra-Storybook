import type { Meta, StoryObj } from "@storybook/react";
import { GitMerge, TimerReset, Plug } from "lucide-react";
import { IntegrationsTab } from "~/app/_components/ui/IntegrationsTab";

const meta: Meta<typeof IntegrationsTab> = {
  title: "Components/Workspaces/IntegrationsTab",
  component: IntegrationsTab,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable DrawerTab component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IntegrationsTab>;

export const Resting: Story = {
  args: {
    enabledIntegrations: [
      { name: "DuckDB", description: "Database" },
    ],
    availableIntegrations: [
      { name: "DuckDB", description: "Database" },
      { name: "DuckDB", description: "Database" },
      { name: "DuckDB", description: "Database" },
      { name: "DuckDB", description: "Database" },
      { name: "DuckDB", description: "Database" },
    ],
  },
};
