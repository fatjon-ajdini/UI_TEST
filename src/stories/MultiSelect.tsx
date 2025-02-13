import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, ReloadIcon } from "@radix-ui/react-icons";

import { countries } from "./data";

export interface MultiSelectOption {
  commonName: string;
  cca2: string;
}

interface MultiSelectProps {
  placeholder?: string;
  selectedValues?: string[];
  disabledValues?: string[];
  isLoading?: boolean;
  onChange?: (values: string[]) => void;
  options?: (values: string[]) => void;
}

export const MultiSelect = ({
  placeholder = "Select countries...",
  options,
  selectedValues: initialSelectedValues = [],
  disabledValues = [],
  isLoading = false,
  onChange,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const [listItems, setListItems] = useState<MultiSelectOption[]>(countries);
  const [loading, setLoading] = useState(isLoading);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    initialSelectedValues
  );

  useEffect(() => {
    setLoading(isLoading);
    if (isLoading) {
      setListItems([]);
    } else {
      setListItems(countries);
    }
  }, [isLoading]);

  const handleSelect = (commonName: string) => {
    if (selectedValues.includes(commonName)) {
      setSelectedValues((prev) => prev.filter((v) => v !== commonName));
    } else {
      setSelectedValues((prev) => [...prev, commonName]);
    }

    onChange?.(
      selectedValues.includes(commonName)
        ? selectedValues.filter((v) => v !== commonName)
        : [...selectedValues, commonName]
    );
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            aria-expanded={open}
            className="flex w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm"
          >
            <span>{placeholder}</span>
            <CaretSortIcon className="ml-2 h-4 w-4 opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <Command>
            <CommandInput placeholder="Search countries..." />
            <CommandEmpty>
              {loading ? (
                <ReloadIcon className="mx-auto h-4 w-4 animate-spin" />
              ) : (
                "No results found."
              )}
            </CommandEmpty>
            {!loading && listItems.length > 0 && (
              <CommandList>
                {listItems.map((option) => (
                  <CommandItem
                    key={option.commonName}
                    value={option.commonName}
                    onSelect={() => handleSelect(option.commonName)}
                    disabled={disabledValues.includes(option.commonName)}
                  >
                    <Checkbox
                      checked={selectedValues.includes(option.commonName)}
                      className={cn(
                        "mr-2",
                        disabledValues.includes(option.commonName) &&
                          "opacity-50"
                      )}
                    />
                    <span
                      className={cn(
                        disabledValues.includes(option.commonName) &&
                          "opacity-50"
                      )}
                    >
                      {option.commonName} ({option.cca2})
                    </span>
                  </CommandItem>
                ))}
              </CommandList>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};
