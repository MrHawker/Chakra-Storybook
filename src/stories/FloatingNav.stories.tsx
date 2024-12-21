import type { Meta, StoryObj } from "@storybook/react";
import { FloatingNav } from "~/app/_components/ui/floatingNav";
import { Calendar, Database, Home, Inbox, Search, Settings, Table, SquareTerminal, CloudUpload, Globe } from "lucide-react"
import { SidebarProvider } from "~/app/_components/ui/sidebar";




const meta: Meta<typeof FloatingNav> = {
  title: "Components/CanvasElements/FloatingNav",
  component: FloatingNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable Button component.",
      },
    },
  },
};
const items = [
  {
    title: "Data Source",
    description: "Define your inputs",
    icon: Database,
  },
  {
    title: "Table",
    description: "Query or join your data",
    icon: Table,
  },
  {
    title: "Data Sinks",
    description: "Write data directly",
    icon: SquareTerminal,
  },
  {
    title: "Upload CSV",
    description: "Drag or drop into canvas",
    icon: CloudUpload,
  },
  {
    title: "Publish to Marketplace",
    description: "Distribute to a global audience",
    icon: Globe,
  },
];
export default meta;
type Story = StoryObj<typeof FloatingNav>;

export const Resting: Story = {
  args: {
    items: items,
  },
};
export const Expanded: Story = {
  args: {
    items: items,
    initiallyExpanded: true,
  },
};
