import { cn } from "@/lib/utils";
import React from "react";
import { Categories, Container, SortPopup } from "@/components/shared";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 py-4 px-1 shadow-lg shadow-purple-800/20 z-10",
        className,
      )}
    >
      <Container className={"flex items-center justify-between"}>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
