import assert from "node:assert/strict";
import test from "node:test";
import {
  getEffectiveUpdateStatus,
  getSafeUpdateDestination,
  matchesUpdateFilters,
} from "../src/lib/updates/centre.ts";
import { updates } from "../src/data/updates.ts";

const sample = {
  slug: "sample-update",
  title: "Verified exam information",
  description: "Check the official education portal for details.",
  category: "education-updates" as const,
  publishedAt: "2026-11-14",
  status: "active" as const,
};

test("filters update items by category and case-insensitive search", () => {
  assert.equal(matchesUpdateFilters(sample, "all", ""), true);
  assert.equal(matchesUpdateFilters(sample, "education-updates", "EXAM"), true);
  assert.equal(matchesUpdateFilters(sample, "gadget-deals", "exam"), false);
  assert.equal(matchesUpdateFilters(sample, "all", "not present"), false);
});

test("status remains active or upcoming until expiry and expires by date", () => {
  assert.equal(getEffectiveUpdateStatus(sample, "2026-11-14"), "active");
  assert.equal(
    getEffectiveUpdateStatus({ ...sample, status: "upcoming" }, "2026-11-14"),
    "upcoming",
  );
  assert.equal(
    getEffectiveUpdateStatus(
      { ...sample, expiresAt: "2026-11-13" },
      "2026-11-14",
    ),
    "expired",
  );
  assert.equal(
    getEffectiveUpdateStatus(
      { ...sample, expiresAt: "2026-11-14" },
      "2026-11-14",
    ),
    "active",
  );
});

test("update destinations allow same-site paths and safe web URLs only", () => {
  assert.deepEqual(getSafeUpdateDestination("/gadgets"), {
    href: "/gadgets",
    external: false,
  });
  assert.equal(
    getSafeUpdateDestination("https://temu.to/k/e9uu7t2whv5")?.external,
    true,
  );
  assert.equal(getSafeUpdateDestination("javascript:alert(1)"), null);
  assert.equal(getSafeUpdateDestination("//example.com/path"), null);
});

test("no unverified promotional or exam content is published by default", () => {
  assert.deepEqual(updates, []);
});
