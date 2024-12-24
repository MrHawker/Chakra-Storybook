import { Manrope } from "next/font/google";
import {
    Box,
  Calculator,
  Calendar,
  CreditCard,
  GitMerge,
  Settings,
  Sheet,
  Smile,
  Upload,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";
import { QuickStartFooter } from "./QuickStartFooter";

const manrope = Manrope({
  subsets: ["latin"],
});

export function QuickStartMenu() {
  const commandItemStyles = "rounded-none transition-all duration-300 px-4 py-3 text-[#A1A1AA] flex justify-start items-center gap-2 data-[selected=true]:bg-[#42424d] data-[selected=true]:text-[#34D399]"
  
  return (
    <Command className={`rounded bg-[#09090B] border border-[#27272A] shadow-md md:min-w-[450px] ${manrope.className}`}>
      <CommandInput className="text-sm placeholder:text-[#52525B] p-[10px] text-muted" placeholder="Type in a command" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup className="bg-[#09090B] px-0 py-0 [&_[cmdk-group-heading]]:bg-[#18181B] [&_[cmdk-group-heading]]:py-[6px] [&_[cmdk-group-heading]]:text-[#A1A1AA]" heading="Common Searches">
          <CommandItem className={commandItemStyles}>
            <span className="flex items-center gap-[10px]">
            <Box className="text-[#34D399]" />
            <span>Create a Canvas</span>
            </span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem className={commandItemStyles}>
            <span className="flex items-center gap-[10px]">
                <Sheet className="text-[#34D399]" />   
                <span>Create a Worksheet</span>
            </span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem >
          <CommandItem className={commandItemStyles}>
            <span className="flex items-center gap-[10px]"> 
                <GitMerge className="text-[#34D399]" />    
                <span>Configure an Integration</span>
            </span>
            <CommandShortcut>⌘ ⌥ L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        
        <CommandGroup className="bg-[#09090B] px-0 py-0 [&_[cmdk-group-heading]]:bg-[#18181B] [&_[cmdk-group-heading]]:py-[6px] [&_[cmdk-group-heading]]:text-[#A1A1AA]" heading="Quick Start">
          <CommandItem className={commandItemStyles}>
            <span className="flex items-center gap-[10px]">
            <Upload className="text-[#34D399]" />
            <span>Upload a File</span>
            </span>
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
          
        </CommandGroup>
      </CommandList>
      <QuickStartFooter />
    </Command>
  );
}
