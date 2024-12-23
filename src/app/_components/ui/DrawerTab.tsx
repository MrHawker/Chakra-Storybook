import { Manrope } from "next/font/google";
import { cn } from "~/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { GitMerge, Plug, TimerReset } from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
});
export interface Tab {
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}
export interface DrawerTabProps {
  title: string;
  tabs: Tab[];
}
export function DrawerTab({ title, tabs}: DrawerTabProps) {
  return (
    <Tabs defaultValue="Integrations" className={` ${manrope.className}`}>
      <TabsList className="bg-[#18181B] gap-6 p-1 w-full">
        {tabs.map((tab) => (<>
        <TabsTrigger
          value={tab.label}
          className={`flex items-center gap-2 rounded-sm px-4 py-[6px] w-full hover:bg-[#52525B] hover:text-white `}
        >
          {tab.icon}
          <span className="">{tab.label}</span>
        </TabsTrigger>
        </>))}
      </TabsList>
      {tabs.map((tab) => (<TabsContent value={tab.label}>{tab.content}</TabsContent>))}
    </Tabs>
  );
}
