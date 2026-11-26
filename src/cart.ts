import { applyDiscount } from "./price";

export interface LineItem {
  cents: number;
  quantity: number;
}

export function subtotal(items: LineItem[]): number {
  return items.reduce((sum, item) => sum + item.cents * item.quantity, 0);
}

export function total(items: LineItem[], coupon?: string): number {
  const cents = subtotal(items);
  if (coupon === "HALF") {
    return applyDiscount(cents, 50);
  }
  if (coupon !== undefined) {
    throw new Error(`unknown coupon: ${coupon}`);
  }
  return cents;
}

export function itemCount(items: LineItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}
