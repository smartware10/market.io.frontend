import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}
const cats = [
  "first",
  "second",
  "tree",
  "four",
  "five",
  "last",
  "fgooi",
  "tooytt",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "font-bold inline-flex gap-1 p-1 border-1 rounded-2xl shadow-md shadow-purple-800",
        className,
      )}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center h-10 rounded-2xl px-5 hover:bg-secondary/70",
            activeIndex === index &&
              "border-2 border-purple-800 text-primary hover:bg-secondary/0",
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
