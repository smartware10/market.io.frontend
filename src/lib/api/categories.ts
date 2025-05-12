import { apiFetch } from "@/lib/fetcher";
import { paths } from "@/lib/api/types";

type CategoryReadList =
  paths["/api/v1/categories/"]["get"]["responses"]["200"]["content"]["application/json"];
type CategoryCreate =
  paths["/api/v1/categories/"]["post"]["requestBody"]["content"]["application/json"];

const useNoStore: boolean = process.env.NEXT_PUBLIC_USE_NO_STORE === "true";

export const getAllCategories = async (): Promise<CategoryReadList | null> => {
  return apiFetch.get<CategoryReadList>("/api/v1/categories/", {
    tags: ["categories"],
    cache: useNoStore ? "no-store" : "force-cache",
    revalidate: useNoStore ? undefined : 21600,
  });
};

export const createCategory = async (data: CategoryCreate, token: string) => {
  return await apiFetch.post<CategoryCreate>("/api/v1/categories/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
