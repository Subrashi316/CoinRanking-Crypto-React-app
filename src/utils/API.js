import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const URL = `https://coinranking1.p.rapidapi.com`;

const createRequest = (url) => ({ url, headers: headers });

export const cryptoApi = createApi({
  reducerPath: "Crypto Api",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins?limit=100"),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getPriceHistory: builder.query({
      query: ({ id, timePeriod }) =>
        createRequest(`/coin/${id}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {useGetCryptosQuery,useGetCryptoDetailQuery,useGetPriceHistoryQuery} = cryptoApi;
