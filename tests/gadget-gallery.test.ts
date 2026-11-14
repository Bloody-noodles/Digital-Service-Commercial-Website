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

test("the consumer catalogue contains distinct, relevant products and local photos", () => {
  assert.ok(gadgetProducts.length >= 15);
  assert.equal(
    new Set(gadgetProducts.map((product) => product.slug)).size,
    gadgetProducts.length,
  );
  assert.equal(
    new Set(gadgetProducts.map((product) => product.category)).size,
    10,
  );

  const imagePaths = new Set<string>();
  const forbiddenCatalogTerms =
    /adafruit|development board|microcontroller|resistor|sensor|speaker driver|battery cell|engineering component|oriamo/i;
  for (const product of gadgetProducts) {
    assert.ok(product.images.length > 0, product.slug + " has no images");
    assert.ok(
      !forbiddenCatalogTerms.test(
        `${product.name} ${product.category} ${product.description}`,
      ),
      product.slug + " is not a consumer gadget listing",
    );
    for (const image of product.images) {
      assert.ok(
        existsSync(resolve("public", image.src.replace(/^\//, ""))),
        product.slug + " references a missing image: " + image.src,
      );
      assert.ok(
        image.alt.trim().length > 0,
        product.slug + " has an image without alt text",
      );
      assert.ok(!imagePaths.has(image.src), "image is reused: " + image.src);
      imagePaths.add(image.src);
    }
    assert.equal(product.affiliateUrl, "https://temu.to/k/e9uu7t2whv5");
    assert.ok(
      product.sourceUrl.startsWith("https://commons.wikimedia.org/wiki/File:"),
      product.slug + " lacks a documented Commons image source",
    );
  }

  assert.equal(gadgetProducts.length, 19);
  assert.equal(imagePaths.size, 19);
  assert.ok(gadgetProducts.some((product) => product.name.includes("JBL")));
  assert.ok(gadgetProducts.some((product) => product.name.includes("Anker")));
  assert.ok(gadgetProducts.some((product) => product.name.includes("Oraimo")));
});
