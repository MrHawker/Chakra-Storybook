import type { Meta, StoryObj } from "@storybook/react";
import { InputMessages, IntegrationForm } from "~/app/_components/ui/IntegrationForm";

const meta: Meta<typeof IntegrationForm> = {
  title: "Components/IntegrationForm", 
  component: IntegrationForm,
  decorators: [
    (Story) => (
      <div className="max-w-[600px] max-h-[800px]">
        <Story />
      </div>
    ),
  ],
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
    messages: defaultMessages,
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
    messages: defaultMessages,
    formState: "readyToTest",
  },
};

export const TestedSuccessfully: Story = {
  args: {
    ...ReadyToTest.args,
    messages: defaultMessages,
    formState: "testedSuccessfully",
  },
};

export const ReadyToCreate: Story = {
  args: {
    ...ReadyToTest.args,
    messages: defaultMessages,
    formState: "readyToCreate",
  },
};            

export const RetryActionInfo: Story = {
  args: {
    ...ReadyToTest.args,
    formState: "retryActionInfo",
    messages: defaultMessages,
    log: "SubDescription that could give more info or ask them to reach out.",
  },
};  

export const RetryAction: Story = {
  args: {
    ...ReadyToTest.args,
    messages: defaultMessages,
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