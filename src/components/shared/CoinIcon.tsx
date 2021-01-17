import React from "react";
import { Image } from "react-native";

import { supportedCoins } from "../../models/Coin";

interface CoinIconProps {
  id: string;
  size?: number;
}

const CoinIcon = ({ id, size = 32 }: CoinIconProps) => {
  // eslint-disable-next-line prefer-destructuring
  const { icon } = supportedCoins.filter(
    (supportedCoin) => supportedCoin.coinGeckoId === id
  )[0];
  return <Image source={icon} style={{ width: size, height: size }} />;
};

export default CoinIcon;
