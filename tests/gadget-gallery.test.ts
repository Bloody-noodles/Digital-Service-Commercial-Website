import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { gadgetProducts } from "../src/data/gadgets.ts";
import {
  getAdjacentImageIndex,
  normalizeImageIndex,
} from "../src/lib/gadgets/gallery.ts";

test("selects a valid image index and normalizes out-of-range selection", () => {
  assert.equal(normalizeImageIndex(0, 3), 0);
  assert.equal(normalizeImageIndex(2, 3), 2);
  assert.equal(normalizeImageIndex(4, 3), 1);
  assert.equal(normalizeImageIndex(-1, 3), 2);
});

test("previous and next navigation wraps around the image list", () => {
  assert.equal(getAdjacentImageIndex(0, -1, 3), 2);
  assert.equal(getAdjacentImageIndex(2, 1, 3), 0);
  assert.equal(getAdjacentImageIndex(1, 1, 3), 2);
});

test("empty galleries have no selected or adjacent image", () => {
  assert.equal(normalizeImageIndex(0, 0), -1);
  assert.equal(getAdjacentImageIndex(0, 1, 0), -1);
});

test("non-finite selection safely defaults to the first available image", () => {
  assert.equal(normalizeImageIndex(Number.NaN, 2), 0);
});

test("all gadget products keep their local image in the gallery array", () => {
  assert.equal(gadgetProducts.length, 10);
  for (const product of gadgetProducts) {
    assert.ok(product.images.length > 0, product.slug + " has no images");
    for (const image of product.images) {
      assert.ok(
        existsSync(resolve("public", image.src.replace(/^\//, ""))),
        product.slug + " references a missing image: " + image.src,
      );
      assert.match(image.alt, /illustrative stock photo/i);
    }
    assert.equal(product.affiliateUrl, "https://temu.to/k/e9uu7t2whv5");
  }
});
