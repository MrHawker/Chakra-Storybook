'use client'

import React, { useRef, useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import { DownArrow } from "~/stories/icons/down-arrow";
import { cn } from "~/lib/utils";
import { DeleteIcon } from "~/stories/icons/delete";
import { LightningBolt } from "~/stories/icons/lightningbolt";
import { CheckmarkIcon } from "~/stories/icons/checkmark";
import { TrashCan } from "~/stories/icons/TrashCan";


const manrope = Manrope({
  subsets: ["latin"],
});

interface Integration {
  icon?: ({ isOpen }: { isOpen: boolean }) => JSX.Element;
  label: string | null;
  onClick?: () => void;
}
interface DropdownProps {
  trigger?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  dismissable?: boolean;
  items?: Integration[];
  selected?: Integration;
  className?: string;
}

const defaultItems: Integration = {
  label: null,
  icon: LightningBolt,
};

const Dropdown = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"select"> & DropdownProps
>(({    
  trigger = "Select an Integration",
  required = false,
  label = "Select",
  dismissable = false,
  items = [],
  disabled = false,
  selected = defaultItems,
  className,
}: DropdownProps) => {
  const allItems = [defaultItems, ...items];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Integration>(selected);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: Integration) => {
    setSelectedItem(item);
    setIsOpen(false);
    
  };
  return (
    <div
      onClick={() => setIsOpen(false)}
      ref={containerRef}
      className={cn(
        " w-full rounded-sm border border-inputBorderBackground bg-inputContainerBg p-1 pt-2",
        manrope.className,
        "space-y-2",
        disabled && "opacity-30",
        className,
      )}
    >
      <div className="flex items-center justify-between pr-1">
        <label className="flex space-x-1 p-1 text-sm font-medium text-inputLabel">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9997 10.6666C11.2633 10.6666 10.6663 11.2635 10.6663 11.9999C10.6663 12.7363 11.2633 13.3333 11.9997 13.3333C12.7361 13.3333 13.333 12.7363 13.333 11.9999C13.333 11.2635 12.7361 10.6666 11.9997 10.6666ZM9.33301 11.9999C9.33301 10.5272 10.5269 9.33325 11.9997 9.33325C13.4724 9.33325 14.6663 10.5272 14.6663 11.9999C14.6663 13.4727 13.4724 14.6666 11.9997 14.6666C10.5269 14.6666 9.33301 13.4727 9.33301 11.9999Z"
              fill="#A1A1AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.99967 2.66659C3.26329 2.66659 2.66634 3.26354 2.66634 3.99992C2.66634 4.7363 3.26329 5.33325 3.99967 5.33325C4.73605 5.33325 5.33301 4.7363 5.33301 3.99992C5.33301 3.26354 4.73605 2.66659 3.99967 2.66659ZM1.33301 3.99992C1.33301 2.52716 2.52692 1.33325 3.99967 1.33325C5.47243 1.33325 6.66634 2.52716 6.66634 3.99992C6.66634 5.47268 5.47243 6.66659 3.99967 6.66659C2.52692 6.66659 1.33301 5.47268 1.33301 3.99992Z"
              fill="#A1A1AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9997 2.66675C12.3679 2.66675 12.6663 2.96522 12.6663 3.33341V4.00008C12.6663 4.36827 12.3679 4.66675 11.9997 4.66675C11.6315 4.66675 11.333 4.36827 11.333 4.00008V3.33341C11.333 2.96522 11.6315 2.66675 11.9997 2.66675Z"
              fill="#A1A1AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9997 6C12.3679 6 12.6663 6.29848 12.6663 6.66667V7.33333C12.6663 7.70152 12.3679 8 11.9997 8C11.6315 8 11.333 7.70152 11.333 7.33333V6.66667C11.333 6.29848 11.6315 6 11.9997 6Z"
              fill="#A1A1AA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.99967 5.33325C4.36786 5.33325 4.66634 5.63173 4.66634 5.99992V13.9999C4.66634 14.3681 4.36786 14.6666 3.99967 14.6666C3.63148 14.6666 3.33301 14.3681 3.33301 13.9999V5.99992C3.33301 5.63173 3.63148 5.33325 3.99967 5.33325Z"
              fill="#A1A1AA"
            />
          </svg>
          <span className="ml-2">
            {label}
            {required && <span className="text-destructive"> *</span>}
          </span>
        </label>
        {dismissable && <TrashCan />}
      </div>
      <button
        ref={triggerRef}
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-sm border border-inputBorderBackground bg-inputBackground p-3 outline-none"
        disabled={disabled}
      >
        <span
          className={`flex items-center gap-2 text-sm font-medium text-inputText ${isOpen || selectedItem.label !== null ? "text-muted" : ""}`}
        >
          {selectedItem.icon && selectedItem.icon({ isOpen })}
          {selectedItem.label || trigger}
        </span>
        <DownArrow isOpen={selectedItem.label === null ? isOpen : true} />
      </button>
      {isOpen && (
        <div
          ref={contentRef}
          className={cn(
            " left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-sm bg-popover p-1 text-popover-foreground shadow-md",
            isOpen &&
              "bg-inputBackground  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            
            )}
          data-state={isOpen ? "open" : "closed"}
        >
          <div className="custom-scrollbar max-h-[132px] space-y-1 overflow-y-scroll p-2  rounded-sm">
            {allItems.map((item, index) => {
              if (item.label) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-sm pb-2 pl-3 pr-4 pt-2 text-white transition-colors duration-100 hover:bg-inputText",
                      selectedItem.label === item.label && "bg-inputText",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && item.icon({ isOpen })}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {selectedItem.label === item.label && <CheckmarkIcon />}
                  </button>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = "Dropdown";

export { Dropdown };
