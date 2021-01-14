export interface Coin {
  id: string;
  symbol: string;
  name: string;
}

export const supportedCoins: string[] = ["bitcoin", "ethereum", "dogecoin"];
export const supportedVsCurrencies: string[] = ["usd", "eur"];
