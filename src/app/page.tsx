
import { HydrateClient } from "~/trpc/server";
import { Input } from "./_components/ui/input";
import { Dropdown } from "./_components/ui/dropdown";


import { S3 } from "~/stories/icons/s3";
import { Databricks } from "~/stories/icons/databricks";
import { Snowflake } from "~/stories/icons/snowflake";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="flex items-center justify-between space-x-2 bg-[#121212] p-3 pt-40">
        
      </div>
    </HydrateClient>
  );
}
