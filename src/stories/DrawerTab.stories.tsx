import type { Meta, StoryObj } from "@storybook/react";
import { GitMerge, TimerReset, Plug } from "lucide-react";
import { DrawerTab } from "~/app/_components/ui/DrawerTab";

const meta: Meta<typeof DrawerTab> = {
  title: "Components/Workspaces/DrawerTab",
  component: DrawerTab,
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
type Story = StoryObj<typeof DrawerTab>;

export const Resting: Story = {
  args: {
    tabs: [
      { label: "Integrations", icon: <GitMerge className="h-4 w-4" />, content: <div>Integrations</div> },
      { label: "API Docs", icon: <Plug className="h-4 w-4" />, content: <div>API Docs</div> },
      { label: "Jobs", icon: <TimerReset className="h-4 w-4" />, content: <div>Jobs</div> },
    ],
  },
};

