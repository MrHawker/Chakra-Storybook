import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "~/app/_components/ui/input";
import { InfoIcon } from "./icons/info";
import { userEvent, within } from "@storybook/testing-library";
import { TextCursor } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: "Components/CanvasElements/chakraInputsDropdowns/Input",
  component: Input,
  
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "A reusable Input component.",
      },
    },
  },
  
  argTypes: {
    type: {
      description: "The type of the input",
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week",
      ],
    },
    placeholder: {
      description: "The placeholder text for the input",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;


export const resting: Story = {
  args: {
    type: "text",
    placeholder: "Give Your Integration a name",
    label: "Name",
    required: true,
    state: "resting",
    labelIcon: <TextCursor width={16} height={16} />,
  },
};

export const disabled: Story = {
  args: {
    ...resting.args,
    defaultValue: "Artemis-BTC-Feed",
    state: "disabled",
  },
};
export const focus: Story = {
  args: {
    ...resting.args,
    
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByPlaceholderText("Give Your Integration a name");
    await userEvent.click(inputElement);
  },
};
export const valid: Story = {
  args: {
    ...resting.args,
    defaultValue: "Artemis-BTC-Feed",
    state: "valid",
  },
};

export const error: Story = {
  args: {
    ...resting.args,
    state: "error",
    defaultValue: "Artemis-BTC-Feed",
    errorMsg: "Gib the user an Error Message",
  },
};
export const info: Story = {
  args: {
    ...resting.args,
    state: "info",
    defaultValue: "Artemis-BTC-Feed",
    infoMsg: "Gib the user some useful information",
  },
};
export const validating: Story = {
  args: {
    ...resting.args,
    state: "warning",
    defaultValue: "nirmal",
    warningMsg: "Special characters (such as @, #, $, %, &, *, and !) are not allowed in usernames.",
  },
};

export const dismissable: Story = {
  args: {
    ...valid.args,
    dismissable: true,
    
  },
};

