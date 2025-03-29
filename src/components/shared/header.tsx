import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared";
import Image from "next/image";
import { Button, ModeToggle } from "@/components/ui";
import { UserRound } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-4">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={85} height={85} />
          <div>
            <h1 className="text-2xl font-bold uppercase table-caption">
              Маркет АйОу
            </h1>
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button size="icon" className="flex items-center font-bold gap-1">
            <UserRound size={22} />
            <span className="sr-only">Вход</span>
          </Button>

          <ModeToggle />
        </div>
      </Container>
    </header>
  );
};
