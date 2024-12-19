import type { Meta, StoryObj } from "@storybook/react";
import { InputMessages, IntegrationForm } from "~/app/_components/ui/IntegrationForm";

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

const defaultMessages: InputMessages = {
  integrationName: {
    errorMsg: "",
    infoMsg: "",
    warningMsg: "",
  },
  integrationType: {
    errorMsg: "",
    infoMsg: "",
    warningMsg: "",
  },
  userName: {
    errorMsg: "",
    infoMsg: "",
    warningMsg: "",
  },
  dbName: {
    errorMsg: "",
    infoMsg: "",
    warningMsg: "",
  },
};

export const Resting: Story = {
  args: {
    formState: "resting",
    defaultValues: {
      integrationName: "",
      integrationType: "",
      userName: "",
      dbName: "",
    },
    ...defaultMessages,
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
    ...defaultMessages,
    formState: "readyToTest",
  },
};

export const TestedSuccessfully: Story = {
  args: {
    ...ReadyToTest.args,
    ...defaultMessages,
    formState: "testedSuccessfully",
  },
};

export const ReadyToCreate: Story = {
  args: {
    ...ReadyToTest.args,
    ...defaultMessages,
    formState: "readyToCreate",
  },
};

export const EnabledView: Story = {
  args: {
    ...ReadyToTest.args,
    ...defaultMessages,
    formState: "enabledView",
  },
};      

export const AvailableList: Story = {
  args: {
    ...ReadyToTest.args,
    ...defaultMessages,
    formState: "availableList",
  },
};                

export const RetryActionInfo: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "retryActionInfo",
    ...defaultMessages,
    log: "SubDescription that could give more info or ask them to reach out.",
  },
};  

export const RetryAction: Story = {
  args: {
    ...ReadyToTest.args,
    ...defaultMessages,
    formState: "retryAction",
  },
};            

export const WarningPrompt: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "warningPrompt",
    messages : {
      ...defaultMessages,
      userName: {
        ...defaultMessages.userName,
        warningMsg: "This looks like a personal email. Please use a Organization email.",
      },
    },
  },
};      