import { Categories } from "./categories";
import { fetcher } from "@/lib/api/client";
import { paths } from "@/lib/api/types";

type Category =
  paths["/api/v1/categories/"]["get"]["responses"]["200"]["content"]["application/json"][number];

export default async function CategoriesWrapper({
  className,
}: {
  className?: string;
}) {
  const getCategories = fetcher
    .path("/api/v1/categories/")
    .method("get")
    .create();

  let categories: Category[] = [];

  try {
    const { data } = await getCategories(undefined);
    categories = data;
  } catch (error) {
    console.error("Ошибка при получении категорий:", error);
  }

  return <Categories className={className} categories={categories} />;
}
