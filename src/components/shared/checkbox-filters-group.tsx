import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "@/components/shared";
import { Input } from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <div className={className}>
        <p className={"font-bold mb-3"}>{title}</p>

        <div className={"ml-1 mr-1 mb-4"}>
          <Input placeholder={searchInputPlaceholder} />
        </div>

        <div
          className={
            "flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar"
          }
        >
          {items.map((item, index) => (
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
            />
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};
