import React from "react";
import Link from "next/link";
import { Title } from "@/components/shared";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Link href={`/product/${id}`}>
          <div
            className={
              "flex justify-center bg-secondary rounded-lg h-[260px] p-6"
            }
          >
            <Image
              width={0}
              height={0}
              src={imageUrl}
              sizes="100vw"
              style={{
                width: "auto",
                height: "auto",
              }}
              alt={title}
              priority={true}
            />
          </div>

          <Title text={title} size={"sm"} className={"md-1 mt-1 font-bold"} />

          <p className={"text-sm text-gray-500"}>{description}</p>

          <div className={"flex justify-between items-center mt-4"}>
            <span className={"text-[20px]"}>
              <b>{price} &#8372;</b>
            </span>
            <Button variant={"outline"} className={"text-base font-bold"}>
              <Plus size={20} className={"mr-1"} />
              Добавить
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};
