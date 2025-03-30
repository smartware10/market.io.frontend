import React from "react";
import { cn } from "@/lib/utils";
import { Container, Title, ToggleTheme } from "@/components/shared";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowRight, ShoppingCart, UserRound } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-b-purple-800/50", className)}>
      <Container className="flex items-center justify-between py-3">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src={"/logo.svg"} alt="Logo" width={80} height={80} />
          <div>
            <Title
              text={"Маркет АйОу"}
              size={"logo"}
              className={"font-extrabold uppercase table-caption"}
            />
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button
            variant={"outline"}
            size="icon"
            className="flex items-center font-bold gap-1"
          >
            <UserRound strokeWidth={2} size={22} />
            <span className="sr-only">Вход</span>
          </Button>

          <ToggleTheme />

          <div>
            <Button className="group relative">
              <b>1500 ₴</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={22} className="relative" strokeWidth={2} />
                <b>1000</b>
              </div>
              <ArrowRight
                strokeWidth={2}
                size={20}
                className="absolute right-2 transition duration-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:transition-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
