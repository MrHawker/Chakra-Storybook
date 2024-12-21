"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { z } from "zod";

const formSchema = z.object({
  integrationName: z.string(),
  integrationType: z.string(),
  userName: z.string(),
  dbName: z.string(),
});

const manrope = Manrope({
  subsets: ["latin"],
});

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Dropdown } from "./dropdown";
import { S3 } from "~/stories/icons/s3";
import { Databricks } from "~/stories/icons/databricks";
import { Snowflake } from "~/stories/icons/snowflake";
import { Manrope } from "next/font/google";
import { Info, RefreshCcw, Rocket, TextCursor } from "lucide-react";
import { UserRound } from "lucide-react";
import { Database } from "lucide-react";
import { OptionalConfigurations } from "./optionalConfigurations";
import Spinner from "~/stories/icons/spinner";
import { useEffect, useState } from "react";

interface IntegrationFormProps {
  formState:
    | "resting"
    | "readyToTest"
    | "testedSuccessfully"
    | "readyToCreate"
    | "enabledView"
    | "availableList"
    | "retryActionInfo"
    | "retryAction"
    | "warningPrompt";
  log?: string;
  defaultValues?: z.infer<typeof formSchema>;
  messages?: InputMessages;
  
}

export interface FieldMessages {
  errorMsg?: string;
  infoMsg?: string;
  warningMsg?: string;
}

export interface InputMessages {
  integrationName: FieldMessages;
  integrationType: FieldMessages;
  userName: FieldMessages;
  dbName: FieldMessages;
}

export function IntegrationForm({
  formState,
  log,
  defaultValues,
  messages,
}: IntegrationFormProps) {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [fieldMessages, setFieldMessages] = useState(messages || {
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
  });
  
  useEffect(() => {
    if (messages) {
      setFieldMessages(messages);
    }
  }, [messages]);

  return (
    <div
      className="space-y-3 rounded-lg"
      style={{ fontFamily: manrope.style.fontFamily }}
    >
      <div className="space-y-3">
        <p className="text-xl text-white">Required Details</p>
        <p className="text-[#A1A1AA] text-muted-foreground">
          We need these details to get your server setup and connected to your
          database.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="integrationType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Dropdown
                    label="Integration Types"
                    selected={{ label: "Snowflake", icon: Snowflake }}
                    required
                    items={[
                      { label: "S3", icon: S3 },
                      { label: "Databricks", icon: Databricks },
                      { label: "Snowflake", icon: Snowflake },
                      { label: "MongoDB", icon: S3 },
                    ]}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="integrationName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    errorMsg={fieldMessages.integrationName.errorMsg}
                    infoMsg={fieldMessages.integrationName.infoMsg}
                    warningMsg={fieldMessages.integrationName.warningMsg}
                    required
                    label="Name"
                    labelIcon={<TextCursor width={16} height={16} />}
                    placeholder="Give your integration a name"
                    description="Give your integration a name"
                    {...field}
                    value={field.value}
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    errorMsg={fieldMessages.userName.errorMsg}
                    infoMsg={fieldMessages.userName.infoMsg}
                    warningMsg={fieldMessages.userName.warningMsg}
                    
                    required
                    label="User"
                    labelIcon={<UserRound width={16} height={16} />}
                    placeholder="The username to access this instance"
                    description="Provide Access to specific users, if you have multiple users, seperate them by comma values."
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dbName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    errorMsg={fieldMessages.dbName.errorMsg}
                    infoMsg={fieldMessages.dbName.infoMsg}
                    warningMsg={fieldMessages.dbName.warningMsg}
                    required
                    label="Database"
                    labelIcon={<Database width={16} height={16} />}
                    placeholder="give your database a unique name."
                    description="The database will store all the integration specific infoormation. "
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <OptionalConfigurations open={false} />
          {formState === "readyToCreate" && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="w-full rounded-none border border-[#064E3B] bg-[#10B981] text-lg font-semibold text-[#022C22] transition-colors duration-200 hover:bg-[#022C22] hover:text-[#10B981]"
              type="submit"
            >
              Create Integration
            </Button>
          )}
          {formState === "resting" && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="border-buttonOutline text-buttonOutline pointer-events-none w-full rounded-none border bg-transparent text-lg font-semibold"
              type="submit"
            >
              Enter Details
            </Button>
          )}
          {formState === "readyToTest" && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="flex w-full items-center justify-center rounded-none bg-[#083344] text-lg font-semibold text-[#06B6D4] transition-colors duration-200 hover:bg-[#06B6D4] hover:text-[#083344]"
              type="submit"
            >
              <Rocket />
              Test Integration
            </Button>
          )}
          {formState === "testedSuccessfully" && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="pointer-events-none flex w-full items-center justify-center rounded-none border-[#06B6D4] bg-[#06B6D4] text-lg font-semibold text-[#083344] text-opacity-80"
              type="submit"
            >
              Test Integration
              <Spinner />
            </Button>
          )}
          {(formState === "retryActionInfo" || formState === "retryAction") && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="flex w-full items-center justify-center rounded-none border-[#06B6D4] bg-[#450A0A] text-lg font-semibold text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A]"
              type="submit"
            >
              Retry
              <RefreshCcw />
            </Button>
          )}

          {formState === "warningPrompt" && (
            <Button
              style={{ fontFamily: manrope.style.fontFamily }}
              className="pointer-events-none flex w-full items-center justify-center rounded-none border-[#431407] bg-[#431407] text-lg font-semibold text-[#F97316]"
              type="submit"
            >
              <Info />
              Please fix the error to proceed
            </Button>
          )}
        </form>
      </Form>
      {log && (
        <div className="space-y-4 rounded border border-[#EF4444] bg-[#450A0A] p-6 pr-8 text-[#EF4444]">
          <h3 className="font-semibold">Error Title</h3>
          <p className="text-sm">{log}</p>
        </div>
      )}
    </div>
  );
}
