"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";

interface Props {
  className?: string;
}
const cats = [
  { id: 1, name: "Компьютеры" },
  { id: 2, name: "Планшеты" },
  { id: 3, name: "Смартфоны" },
  { id: 4, name: "Мониторы" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn(
        "font-bold bg-white dark:bg-[#030712] inline-flex ml-1 gap-1 p-1 h-[49px] border-1 rounded-2xl shadow-md shadow-primary",
        className,
      )}
    >
      {cats.map(({ id, name }, index) => (
        <a
          className={cn(
            "flex items-center h-10 rounded-2xl px-5 hover:bg-secondary/70",
            categoryActiveId === id &&
              "border-1 border-primary text-primary bg-secondary/70",
          )}
          href={`#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
