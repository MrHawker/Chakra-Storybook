import { Manrope } from "next/font/google";
import { DrawerTab } from "./DrawerTab";

import { ArrowLeftToLine } from "lucide-react";
import { Tab } from "./DrawerTab";

interface DrawerProps {
  tabs: Tab[];
}

const manrope = Manrope({ subsets: ["latin"] });

export function Drawer({ tabs }: DrawerProps) {
  return (
    <div className={`${manrope.className} min-w-[600px] max-w-[600px] space-y-6 p-6`}>
      <nav className="flex items-center justify-between">
        <span className="mx-4 my-2 flex items-center gap-2 rounded text-[#52525B] transition-colors duration-200 hover:cursor-pointer hover:text-white">
          <ArrowLeftToLine className="h-4 w-4" />
          <span>Back</span>
        </span>
      </nav>
      <DrawerTab title="Integrations" tabs={tabs} />
    </div>
  );
}
