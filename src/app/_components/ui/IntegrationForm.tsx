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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Dropdown } from "./dropdown";
import { S3 } from "~/stories/icons/s3";
import { Databricks } from "~/stories/icons/databricks";
import { Snowflake } from "~/stories/icons/snowflake";
import { Manrope } from "next/font/google";
import { Info, RefreshCcw, Rocket, TextCursor } from "lucide-react";
import { UserRound } from 'lucide-react';
import { Database } from 'lucide-react';
import { OptionalConfigurations } from "./optionalConfigurations";
import { CustomButton } from "./custom-button";
import Spinner from "~/stories/icons/spinner";

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
  log?: string | null;
  defaultValues?: z.infer<typeof formSchema>;
}

export function IntegrationForm({ formState, log, defaultValues }: IntegrationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="space-y-3 rounded-lg" style={{ fontFamily: manrope.style.fontFamily }}>
      <div className="space-y-3" >
        <p className="text-xl text-white">Required Details</p>
        <p className="text-[#A1A1AA] text-muted-foreground">
            We need these details to get your server setup and connected to your database.
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
                    
                    state={formState !== "resting" ? "valid" : "resting"}
                    required
                    label="Name"
                    labelIcon={<TextCursor width={16} height={16} />}
                    placeholder="Give your integration a name"
                    description="Give your integration a name"
                    {...field}
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
                    state={formState !== "resting" ?  formState === "warningPrompt" ? "warning" : "valid" : "resting"}
                    warningMsg={formState === "warningPrompt" ? "This looks like a personal email. Please use a Organization email. " : ""}
                    required
                    label="User"
                    labelIcon={<UserRound width={16} height={16} />}
                    placeholder="The username to access this instance"
                    description="Provide Access to specific users, if you have multiple users, seperate them by comma values."
                    {...field}
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
                    state={formState !== "resting" ? "valid" : "resting"}
                    required
                    label="Database"
                    labelIcon={<Database width={16} height={16} />}
                    placeholder="give your database a unique name."
                    description="The database will store all the integration specific infoormation. "
                    {...field}
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
            className="border border-[#064E3B] w-full text-lg rounded-none font-semibold bg-[#10B981] text-[#022C22] hover:bg-[#022C22] hover:text-[#10B981] transition-colors duration-200" type="submit">
                Create Integration
            </Button>
          )}
          {formState === "resting" && (
            <Button
            style={{ fontFamily: manrope.style.fontFamily }}
            className="rounded-nonebg-transparent border border-buttonOutline text-buttonOutline pointer-events-none w-full text-lg rounded-none font-semibold" type="submit">
                Enter Details
            </Button>
          )}
          {formState === "readyToTest" && (
            <Button
            style={{ fontFamily: manrope.style.fontFamily }}
            className="rounded-nonew-full bg-[#083344] text-[#06B6D4] text-lg font-semibold hover:bg-[#06B6D4] hover:text-[#083344] transition-colors duration-200 items-center justify-center flex" type="submit">
                <Rocket/>
                Test Integration 
            </Button>
          )}
          {formState === "testedSuccessfully" && (
            <Button
            style={{ fontFamily: manrope.style.fontFamily }}
            className="rounded-nonew-full bg-[#06B6D4] border-[#06B6D4] text-[#083344] items-center justify-center flex text-lg font-semibold text-opacity-80 pointer-events-none" type="submit">
                Test Integration 
                <Spinner/>
            </Button>
          )}
          {(formState === "retryActionInfo" || formState === "retryAction") && (
            <Button
            style={{ fontFamily: manrope.style.fontFamily }}
            className="rounded-none w-full bg-[#450A0A] border-[#06B6D4] text-[#EF4444] hover:bg-[#EF4444] hover:text-[#450A0A] items-center justify-center flex text-lg font-semibold " type="submit">
                Retry
                <RefreshCcw />
            </Button>
          )}

          {formState === "warningPrompt" && (
            <Button
            style={{ fontFamily: manrope.style.fontFamily }}
            className="rounded-none w-full bg-[#431407] border-[#431407] text-[#F97316] pointer-events-none items-center justify-center flex text-lg font-semibold " type="submit">
                <Info/>
                Please fix the error to proceed
                
            </Button>
          )}
        </form>
      </Form>
      {log && (
      <div className="bg-[#450A0A] rounded border border-[#EF4444] text-[#EF4444] p-6 pr-8 space-y-4">
        <h3 className="font-semibold">
            Error Title
        </h3>
        <p className="text-sm ">
            {log}
        </p>
      </div>
      )}
    </div>
  );
}
