import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const cats = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "font-bold bg-white dark:bg-[#030712] inline-flex ml-1 gap-1 p-1 h-[49px] border-1 rounded-2xl shadow-md shadow-primary",
        className,
      )}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center h-10 rounded-2xl px-5 hover:bg-secondary/70",
            activeIndex === index &&
              "border-1 border-primary text-primary bg-secondary/70",
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
