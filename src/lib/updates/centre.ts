import type {
  CentreUpdate,
  UpdateCategory,
  UpdateStatus,
} from "@/data/updates";

export function getEffectiveUpdateStatus(
  update: Pick<CentreUpdate, "status" | "expiresAt">,
  today = new Date().toISOString().slice(0, 10),
): UpdateStatus {
  if (update.status === "expired") return "expired";
  if (update.expiresAt && update.expiresAt < today) return "expired";
  return update.status;
}

export function matchesUpdateFilters(
  update: Pick<CentreUpdate, "category" | "title" | "description">,
  category: "all" | UpdateCategory,
  query: string,
): boolean {
  const matchesCategory = category === "all" || update.category === category;
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchesQuery =
    !normalizedQuery ||
    (update.title + " " + update.description)
      .toLocaleLowerCase()
      .includes(normalizedQuery);

  return matchesCategory && matchesQuery;
}

export function getSafeUpdateDestination(
  destination: string | undefined,
): { href: string; external: boolean } | null {
  if (!destination) return null;
  if (destination.startsWith("/") && !destination.startsWith("//")) {
    return { href: destination, external: false };
  }

  try {
    const url = new URL(destination);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return { href: url.toString(), external: true };
  } catch {
    return null;
  }
}
