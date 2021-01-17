/* eslint-disable camelcase */
import { create } from "apisauce";

import { Coin } from "../models/Coin";

const coinGeckoApi = create({
  baseURL: "https://api.coingecko.com/api/v3/",
  headers: { Accept: "application/json" },
});

export interface CoinGeckoApiResponse {
  data: never[];
  error: boolean;
  errorMessage?: string;
}

const normalizeApiData = (apiResponse): CoinGeckoApiResponse => {
  if (apiResponse.ok) {
    return {
      data: apiResponse.data,
      error: false,
    };
  } else {
    let errorMessage = "";
    switch (apiResponse.problem) {
      case "CLIENT_ERROR":
        errorMessage = apiResponse.data;
        break;
      case "SERVER_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinGecko, veuillez réessayer plus tard.";
        break;
      case "TIMEOUT_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinGecko, veuillez réessayer plus tard.";
        break;
      case "CONNECTION_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinGecko, veuillez réessayer plus tard.";
        break;
      case "NETWORK_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinGecko, veuillez réessayer plus tard.";
        break;
      default:
        errorMessage = "Une erreur innatendue est survenue";
        break;
    }
    return {
      data: [],
      error: true,
      errorMessage,
    };
  }
};

async function getCoins() {
  const response = await coinGeckoApi.get("/coins/list");
  return await normalizeApiData(response);
}

export interface getCoinSimplePricesParams {
  ids: string;
  vs_currencies: string;
  include_market_cap?: "true" | "false";
  include_24hr_vol?: "true" | "false";
  include_24hr_change?: "true" | "false";
  include_last_updated_at?: "true" | "false";
}

async function getCoinSimplePrices(params: getCoinSimplePricesParams) {
  const response = await coinGeckoApi.get("/simple/price", { ...params });
  return await normalizeApiData(response);
}

export { getCoins, getCoinSimplePrices };

export default coinGeckoApi;
