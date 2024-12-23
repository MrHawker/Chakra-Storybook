import type { Meta, StoryObj } from "@storybook/react";
import { GitMerge, TimerReset, Plug } from "lucide-react";
import { APIDocsTab } from "~/app/_components/ui/APIDocsTab";
import { Drawer } from "~/app/_components/ui/Drawer";
import { DrawerTab } from "~/app/_components/ui/DrawerTab";
import { IntegrationsTab } from "~/app/_components/ui/IntegrationsTab";

const meta: Meta<typeof Drawer> = {
  title: "Components/Workspaces/Drawer",
  component: Drawer,
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
type Story = StoryObj<typeof Drawer>;

export const Resting: Story = {
  args: {
    tabs: [
      {
        label: "Integrations",
        icon: <GitMerge className="h-4 w-4" />,
        content: (
          <IntegrationsTab
            enabledIntegrations={[{ name: "DuckDB", description: "Database" }]}
            availableIntegrations={[
              { name: "DuckDB", description: "Database" },
              { name: "DuckDB", description: "Database" },
              { name: "DuckDB", description: "Database" },
              { name: "DuckDB", description: "Database" },
            ]}
          />
        ),
      },
      {
        label: "API Docs",
        icon: <Plug className="h-4 w-4" />,
        content: (
          <APIDocsTab
            apiKey="dw_prod_8f4k2p9x7v3m1q5n6t8h4w9c2y5r7j3l"
            bashCode={`curl -X POST https://dw.company.com/api/trigger \\
  -H "Authorization: Bearer dw_prod_8f4k2p9x7v3m1q5n6t8h4w9c2y5r7j3l" \\
  -H "Content-Type: application/json" \\
  -d '{"action": "refresh", "tables": ["sales", "inventory"]}'`}
          />
        ),
      },
      {
        label: "Jobs",
        icon: <TimerReset className="h-4 w-4" />,
        content: <div>Jobs</div>,
      },
    ],
  },
};
