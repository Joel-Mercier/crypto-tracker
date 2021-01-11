import { create } from "apisauce";

const coinCapApi = create({
  baseURL: "https://api.coincap.io/v2",
  headers: { Accept: "application/json", "Accept-Encoding": "gzip" },
});

const normalizeApiData = (apiResponse) => {
  if (apiResponse.ok) {
    return apiResponse.data;
  } else {
    let errorMessage = "";
    switch (apiResponse.problem) {
      case "CLIENT_ERROR":
        errorMessage = apiResponse.data;
        break;
      case "SERVER_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinCap, veuillez réessayer plus tard.";
        break;
      case "TIMEOUT_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinCap, veuillez réessayer plus tard.";
        break;
      case "CONNECTION_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinCap, veuillez réessayer plus tard.";
        break;
      case "NETWORK_ERROR":
        errorMessage =
          "Un problème est survenu avec l'API CoinCap, veuillez réessayer plus tard.";
        break;
      default:
        errorMessage = "Une erreur innatendue est survenue";
        break;
    }
    return {
      error: true,
      errorMessage,
    };
  }
};

interface getAssetsParams {
  limit?: number;
  offset?: number;
  search?: string;
  ids?: string;
}

async function getAssets(params: getAssetsParams) {
  const response = await coinCapApi.get("/assets", { ...params });
  return await normalizeApiData(response);
}

export { getAssets };

export default coinCapApi;
