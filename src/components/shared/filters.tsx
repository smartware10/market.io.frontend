import React from "react";
import { Title } from "@/components/shared";
import { FilterCheckbox } from "@/components/shared";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={className}>
        <Title text={"Фильтр"} size={"sm"} className={"ml-3 mb-4 font-bold"} />
      </div>

      <div className={"flex flex-col gap-4"}>
        <FilterCheckbox text={"Производитель"} value={"1"} />
        <FilterCheckbox text={"New"} value={"2"} />
      </div>
    </>
  );
};
