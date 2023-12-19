import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`;

const TRENDING_URL = `${process.env.REACT_APP_TMDB_BASE_URL}trending/movie/week`;

const getTrending = async () => {
  try {
    const trendingResponse = await axiosInstance.get(TRENDING_URL);
    return trendingResponse.data;
  } catch (error) {
    throw error;
  }
};

export const useGetTrending = () => {
  return useQuery("data", getTrending, { cacheTime: 24 * (60 * 60000) });
};
