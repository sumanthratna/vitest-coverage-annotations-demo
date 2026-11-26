import { expect, test } from "vitest";
import { total } from "../src/cart";

test("totals line items with a coupon", () => {
  expect(total([{ cents: 300, quantity: 2 }], "HALF")).toBe(300);
});
