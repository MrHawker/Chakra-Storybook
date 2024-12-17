import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/app/_components/ui/button";

const meta: Meta<typeof Button> = {
  title: "CanvasElements/chakraInputsDropdowns/Button",
  component: Button,
  
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A reusable button component that supports different variants and sizes.",
      },
    },
  },
  
  argTypes: {
    variant: {
      description: "The visual style of the button",
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: ["default", "sm", "lg"],
    },
    children: {
      description: "The content to display inside the button",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Chakra_Button: Story = {
  args: {
    children: "Casd",
    variant: "destructive",
  },
  
  parameters: {
    docs: {
      description: {
        story:
          "This is the primary button style, used as the main call-to-action in forms and dialogs.",
      },
    },
  },
};


