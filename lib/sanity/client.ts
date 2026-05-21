import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  // Token only used server-side for draft preview
  token: process.env.SANITY_API_TOKEN,
});

/** Image URL builder */
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/** Typed fetch wrapper with revalidation */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
  revalidate: number = 3600
): Promise<T> {
  return sanityClient.fetch<T>(query, params ?? {}, {
    next: { revalidate },
  });
}
