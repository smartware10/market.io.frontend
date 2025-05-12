const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

type FetchOptions = RequestInit & {
  tags?: string[];
  revalidate?: number;
  cache?: RequestCache;
};

const request = async <T>(
  method: string,
  path: string,
  body?: object,
  options: FetchOptions = {},
): Promise<T | null> => {
  const { headers, revalidate, cache, tags, ...rest } = options;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5 секунд

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      method,
      body: body ? JSON.stringify(body) : null,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache,
      next: revalidate !== undefined || tags ? { revalidate, tags } : undefined,
      signal: controller.signal,
      ...rest,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const errorText = await res.text();
      console.warn(`Ошибка ${method} ${path}: ${res.status} - ${errorText}`);
      return null;
    }

    return await res.json();
  } catch (err) {
    clearTimeout(timeout);
    console.error("Fetch error:", err);
    return null;
  }
};

export const apiFetch = {
  get: <T>(path: string, options?: FetchOptions) =>
    request<T>("GET", path, undefined, options),

  post: <T>(path: string, body?: object, options?: FetchOptions) =>
    request<T>("POST", path, body, options),

  put: <T>(path: string, body?: object, options?: FetchOptions) =>
    request<T>("PUT", path, body, options),

  del: <T>(path: string, options?: FetchOptions) =>
    request<T>("DELETE", path, undefined, options),
};
