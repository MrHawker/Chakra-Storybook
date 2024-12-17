import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "~/app/_components/ui/input";
import { InfoIcon } from "./icons/info";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof Input> = {
  title: "CanvasElements/chakraInputsDropdowns/Input",
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
    defaultValue: "Artemis-BTC-Feed",
    kind: "resting",
  },
};

export const disabled: Story = {
  args: {
    ...resting.args,
    kind: "disabled",
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
    
    kind: "valid",
  },
};

export const error: Story = {
  args: {
    ...resting.args,
    kind: "error",
    
    errorMsg: "Gib the user an Error Message",
  },
};
export const info: Story = {
  args: {
    ...resting.args,
    kind: "info",
    defaultValue: "Artemis-BTC-Feed",
    infoMsg: "Gib the user some useful information",
  },
};
export const validating: Story = {
  args: {
    ...resting.args,
    kind: "warning",
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
