import { colorShade } from "../utils/Colors";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
}

export interface SupportedCoin {
  coinGeckoId: string;
  icon: number;
  color: string;
  bgColor: string;
}

export const supportedCoins: SupportedCoin[] = [
  {
    coinGeckoId: "bitcoin",
    icon: require("../../node_modules/cryptocurrency-icons/32@2x/color/btc.png"),
    color: "#F6931C",
    bgColor: colorShade("#F6931C", 40),
  },
  {
    coinGeckoId: "ethereum",
    icon: require("../../node_modules/cryptocurrency-icons/32@2x/color/eth.png"),
    color: "#6C89ED",
    bgColor: colorShade("#6C89ED", 40),
  },
  {
    coinGeckoId: "dogecoin",
    icon: require("../../node_modules/cryptocurrency-icons/32@2x/color/doge.png"),
    color: "#C3A634",
    bgColor: colorShade("#C3A634", 40),
  },
];

export const supportedVsCurrencies: string[] = ["usd", "eur"];
