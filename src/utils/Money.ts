import "intl";
import "intl/locale-data/jsonp/fr";

export const priceToCurrency = (price: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export const toPercentage = (change: number) => {
  return `${roundTo(change, 2)} %`;
};

const roundTo = (n: number, digits: number) => {
  if (digits === undefined) {
    digits = 0;
  }

  const multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return Math.round(n) / multiplicator;
};
