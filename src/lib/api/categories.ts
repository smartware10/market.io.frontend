import { apiFetch } from "@/lib/fetcher";
import { paths } from "@/lib/api/types";

type CategoriesResponse =
  paths["/api/v1/categories/"]["get"]["responses"]["200"]["content"]["application/json"];

const useNoStore: boolean = process.env.NEXT_PUBLIC_USE_NO_STORE === "true";

export const getAllCategories =
  async (): Promise<CategoriesResponse | null> => {
    return apiFetch.get<CategoriesResponse>("/api/v1/categories/", {
      tags: ["categories"],
      cache: useNoStore ? "no-store" : "force-cache",
      revalidate: useNoStore ? undefined : 21600,
    });
  };
