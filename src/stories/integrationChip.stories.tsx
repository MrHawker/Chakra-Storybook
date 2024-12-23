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
    title: "DuckDB",
    description: "Database",
  },
};

export const Edit: Story = {
  args: {
    state: "edit",
    title: "DuckDB",
    description: "Database",
  },
};

export const Empty: Story = {
  args: {
    state: "empty",
    title: "Awsome Integration",
    description: "Database",
  },
};
export const Ready: Story = {
  args: {
    state: "ready",
    title: "DuckDB",
    description: "Database",
  },
};
export const WithCanvases: Story = {
  args: {
    state: "enabled",
    title: "DuckDB",
    description: "Database",
    canvases: [{
      name: "Canvas 1",
    }],
  },
};
export const WithManyCanvases: Story = {
  args: {
    state: "enabled",
    title: "DuckDB",
    description: "Database",
    canvases: [{
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }
    , {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }, {
      name: "ARTEMIS_DB",
    }
  ],
  },
};
