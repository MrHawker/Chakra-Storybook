"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "./sidebar";
import { cn } from "~/lib/utils";
import { Manrope } from "next/font/google";
const manrope = Manrope({
    subsets: ["latin"],
  });
  
interface FloatingNavProps {
  items: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  initiallyExpanded?: boolean;
}

export function FloatingNav({
  items,
  initiallyExpanded = false,
}: FloatingNavProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  return (
    <SidebarProvider>
      <Sidebar
        
        className={cn(
          " transition-all duration-300 ease-in-out h-fit border-none ",
          expanded ? "w-[232px]" : "w-[56px]",
          manrope.className,

        )}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <SidebarContent className="no-scrollbar bg-[#09090B] text-white border border-[#27272A] rounded-sm">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.description}
                        className={cn(
                          "border-none flex w-fit items-center whitespace-nowrap transition-all duration-300 ease-in-out py-[6px] h-fit rounded-sm hover:bg-[#464648] hover:text-white gap-0",
                          expanded ? "gap-4" : "gap-0",
                        )}
                      >
                        <item.icon className="!h-5 !w-[21px]" />
                        <span
                        className={cn(
                            "flex flex-col",
                            expanded
                              ? "w-auto opacity-100"
                              : "w-0 overflow-hidden opacity-0 ",
                          )}
                        >
                          <span
                            className="text-sm font-medium"
                          >
                            {item.title}
                          </span>
                          <span
                            className="text-[10px] text-[#A1A1AA]"
                          >
                            {item.description}
                          </span>
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
