import type { Meta, StoryObj } from "@storybook/react";
import { IntegrationForm } from "~/app/_components/ui/IntegrationForm";

const meta: Meta<typeof IntegrationForm> = {
  title: "Components/IntegrationForm", 
  component: IntegrationForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A reusable Form component.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IntegrationForm>; 

export const Resting: Story = {
  args: {
    formState: "resting",
    defaultValues: {
      integrationName: "",
      integrationType: "",
      userName: "",
      dbName: "",
    },
  },
};

export const ReadyToTest: Story = {
  args: {
    ...Resting.args,
    defaultValues: {
      integrationName: "Drink-Sink",
      integrationType: "",
      userName: "nirmal@chakra.ai",
      dbName: "TRANSACTIONS_DB",
    },
    formState: "readyToTest",
  },
};

export const TestedSuccessfully: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "testedSuccessfully",
  },
};

export const ReadyToCreate: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "readyToCreate",
  },
};

export const EnabledView: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "enabledView",
  },
};      

export const AvailableList: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "availableList",
  },
};                

export const RetryActionInfo: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "retryActionInfo",
    log: "SubDescription that could give more info or ask them to reach out.",
  },
};  

export const RetryAction: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "retryAction",
  },
};            

export const WarningPrompt: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "warningPrompt",
  },
};      