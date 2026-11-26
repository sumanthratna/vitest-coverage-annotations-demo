export function applyDiscount(price: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new RangeError(`percent out of range: ${percent}`);
  }
  return Math.round(price * (100 - percent)) / 100;
}

export function formatPrice(cents: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cents / 100);
}

export function addTax(cents: number, rate: number): number {
  return Math.round(cents * (1 + rate));
}
