import { CheckCheck, GitMerge, List, Search } from "lucide-react";
import { Manrope } from "next/font/google";
import { SearchBar } from "./SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { IntegrationChip } from "./integrationChip";

const manrope = Manrope({ subsets: ["latin"] });
interface Integration {
  name: string;
  description: string;
}
interface IntegrationTabProps {
  enabledIntegrations: Integration[];
  availableIntegrations: Integration[];
}

export function IntegrationsTab({
  enabledIntegrations = [],
  availableIntegrations = [],
}: IntegrationTabProps) {
  return (
    <div className={`${manrope.className} mt-6`}>
      <div className="space-y-4">
        <h2 className="flex items-center gap-3">
          <GitMerge className="text-[#52525B]" />
          <span className="text-2xl font-semibold text-white">
            Integrations
          </span>
        </h2>
        <nav className="space-y-3">
          <SearchBar
            className="py-2 pl-3 pr-[6px]"
            placeholder="Search for Integrations..."
          />
        </nav>
        <Tabs defaultValue="enabled">
          <TabsList className="bg-transparent text-sm">
            <TabsTrigger className="rounded-[2px] px-4 py-2" value="enabled">
              Enabled
            </TabsTrigger>
            <TabsTrigger className="rounded-[2px] px-4 py-2" value="Available">
              Available
            </TabsTrigger>
          </TabsList>
          <hr className="my-6 border-[#27272A]" />
          <TabsContent value="enabled" className="space-y-6 text-white">
            <h3 className="flex items-center gap-2 text-[#A1A1AA]">
              <CheckCheck />
              <span className="text-lg font-semibold">
                Enabled Integrations
              </span>
            </h3>
            <div className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar">
              {enabledIntegrations.map((integration) => (
                <IntegrationChip
                  state="enabled"
                  title={integration.name}
                  description={integration.description}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Available" className="space-y-6 text-white">
            <h3 className="flex items-center gap-2 text-[#A1A1AA]">
              <List />
              <span className="text-lg font-semibold">
                Available Integrations
              </span>
            </h3>
            <div className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar">
              {availableIntegrations.map((integration) => (
                <IntegrationChip
                  state="ready"
                  title={integration.name}
                  description={integration.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
}
