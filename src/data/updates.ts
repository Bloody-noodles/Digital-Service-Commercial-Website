export type UpdateCategory =
  | "deals-promotions"
  | "gadget-deals"
  | "education-updates"
  | "important-notices";

export type UpdateStatus = "active" | "upcoming" | "expired";

export interface UpdateImage {
  src: string;
  alt: string;
}

export interface CentreUpdate {
  slug: string;
  title: string;
  description: string;
  category: UpdateCategory;
  publishedAt: string;
  expiresAt?: string;
  status: UpdateStatus;
  image?: UpdateImage;
  ctaLabel?: string;
  ctaUrl?: string;
}

export const updateCategories: {
  id: "all" | UpdateCategory;
  label: string;
}[] = [
  { id: "all", label: "All Updates" },
  { id: "deals-promotions", label: "Deals & Promotions" },
  { id: "gadget-deals", label: "Gadget Deals" },
  { id: "education-updates", label: "Education Updates" },
  { id: "important-notices", label: "Important Notices" },
];

/**
 * Add only owner-approved promotions or verified announcements here.
 * Keep this empty until publishable details and dates are confirmed.
 */
export const updates: CentreUpdate[] = [];
