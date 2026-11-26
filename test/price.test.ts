import { expect, test } from "vitest";
import { applyDiscount, formatPrice } from "../src/price";

test("applies a percentage discount", () => {
  expect(applyDiscount(2000, 25)).toBe(1500);
});

test("formats cents as currency", () => {
  expect(formatPrice(1999)).toBe("$19.99");
});
