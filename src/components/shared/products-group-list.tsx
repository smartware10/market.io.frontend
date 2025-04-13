import React from "react";
import { Title, ProductCard } from "@/components/shared";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Props {
  title: string;
  items: ProductCardProps[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Title text={title} size={"lg"} className={"font-extrabold mb-5"} />

        <div className={cn("grid grid-cols-3 gap-11", listClassName)}>
          {items.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
