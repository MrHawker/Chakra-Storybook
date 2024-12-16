

import { HydrateClient } from "~/trpc/server";
import { Button } from "./_components/ui/button";

export default async function Home() {

  return (
    <HydrateClient>
      <div>HELLO WORLD</div>
      <Button>BRUH123</Button>
    </HydrateClient>
  );
}
