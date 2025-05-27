import React from "react";
import { cn } from "@/lib/utils";
import { Container, SortPopup } from "@/components/shared";
import CategoriesWrapper from "@/components/shared/categories-wrapper";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("sticky top-0 py-4 px-1 z-10", className)}>
      <Container className={"flex items-center justify-between"}>
        <CategoriesWrapper />
        <SortPopup />
      </Container>
    </div>
  );
};
