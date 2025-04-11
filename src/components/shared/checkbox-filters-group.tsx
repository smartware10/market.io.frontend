"use client";

import React from "react";
import { FilterCheckbox, FilterCheckboxProps } from "@/components/shared";
import { Input } from "@/components/ui";
import { Minus, Plus, Search } from "lucide-react";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  // defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  // defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : items.slice(0, limit);

  return (
    <>
      <div className={className}>
        <p className={"font-bold mb-3"}>{title}</p>

        {showAll && (
          <div className={"ml-1 mr-1 mb-4 relative"}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className={"absolute text-primary"} />
            </div>
            <Input
              value={searchValue}
              onChange={onChangeSearchInput}
              placeholder={searchInputPlaceholder}
              className={"pl-9"}
            />
          </div>
        )}
        <div
          className={
            "flex flex-col gap-4 max-h-96 pr-2 overflow-y-auto custom-scrollbar"
          }
        >
          {list.map((item) => (
            <FilterCheckbox
              key={item.value}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
            />
          ))}
        </div>
        {items.length > limit && (
          <div className={showAll ? "border-t border-t-primary mt-4" : ""}>
            <button
              onClick={() => {
                if (showAll) {
                  setSearchValue("");
                }
                setShowAll(!showAll);
              }}
              className={"text-primary mt-3 ml-1 flex items-center"}
            >
              {showAll ? (
                <>
                  <Minus size={18} className={"mr-1"} />
                  Скрыть
                </>
              ) : (
                <>
                  <Plus size={18} className={"mr-1"} />
                  Показать всё
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
