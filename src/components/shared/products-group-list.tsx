"use client";

import React from "react";
import { useIntersection } from "react-use";
import { Title, ProductCard } from "@/components/shared";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store";

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
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <>
      <div className={className} id={title} ref={intersectionRef}>
        <Title text={title} size={"lg"} className={"font-extrabold mb-5"} />

        {items.length === 0 ? (
          <p className="text-muted-foreground">Нет товаров в этой категории.</p>
        ) : (
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
        )}
      </div>
    </>
  );
};
