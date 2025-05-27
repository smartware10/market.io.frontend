import { Fetcher } from "openapi-typescript-fetch";
import type { paths } from "./types";

const useNoStore: boolean = process.env.NEXT_PUBLIC_USE_NO_STORE === "true";

const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  init: {
    cache: useNoStore ? "no-store" : "force-cache",
    next: { revalidate: useNoStore ? undefined : 21600 },
  },
});

export { fetcher };
