"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";

interface Props {
  className?: string;
  categories: { id: number; name: string }[];
}

export const Categories: React.FC<Props> = ({ className, categories }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        "font-bold bg-white dark:bg-[#030712] inline-flex ml-1 gap-1 p-1 h-[49px] border-1 rounded-2xl shadow-md shadow-primary",
        className,
      )}
    >
      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map(({ id, name }) => (
          <a
            key={id}
            href={`#${name}`}
            className={cn(
              "flex items-center h-10 rounded-2xl px-5 hover:bg-secondary/70",
              categoryActiveId === id &&
                "border-1 border-primary text-primary bg-secondary/70",
            )}
          >
            <button>{name}</button>
          </a>
        ))
      ) : (
        <span className="px-4 py-2 text-muted-foreground">
          Нет категорий (ошибка загрузки)
        </span>
      )}
    </div>
  );
};
