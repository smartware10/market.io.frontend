import React from "react";
import {
  Title,
  FilterCheckbox,
  CheckboxFiltersGroup,
} from "@/components/shared";
import { Input, RangeSlider } from "@/components/ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={className}>
        <Title text={"Фильтр"} size={"sm"} className={"ml-3 mb-4 font-bold"} />

        <div className={"flex flex-col gap-4 ml-1"}>
          <FilterCheckbox text={"Производитель"} value={"1"} />
          <FilterCheckbox text={"New"} value={"2"} />
        </div>

        <div className={"mt-5 ml-1 mr-1 pb-5 border-y border-y-primary"}>
          <p className={"font-bold mb-3 mt-3 ml-1"}>Цена от и до:</p>
          <div className={"flex ml-1 mr-1 gap-3 mb-6"}>
            <Input
              type={"number"}
              placeholder={"0"}
              min={0}
              max={30000}
              defaultValue={0}
            />
            <Input type={"number"} placeholder={"30000"} min={10} max={30000} />
          </div>
          <div className="flex justify-center">
            <RangeSlider
              min={0}
              max={30000}
              step={10}
              value={[0, 30000]}
              hideValue={true}
              className={"w-[95%]"}
            />
          </div>
        </div>

        <CheckboxFiltersGroup
          title={"Тест"}
          items={[
            { text: "hgf", value: "3" },
            { text: "qwe", value: "4" },
          ]}
          className={"ml-1 mt-3"}
        />
      </div>
    </>
  );
};
