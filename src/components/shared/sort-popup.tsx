import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 mr-1 py-1 px-4 border-1 shadow-md shadow-primary h-[52px] rounded-2xl cursor-pointer",
        className,
      )}
    >
      <ArrowUpDown size={20} />
      <b>Сортировка:</b>
      <b className={"text-primary"}>популярное</b>
    </div>
  );
};
