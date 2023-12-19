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
const SEARCH_URL = `${process.env.REACT_APP_TMDB_BASE_URL}search/movie`;

const getTrending = async () => {
  try {
    const trendingResponse = await axiosInstance.get(TRENDING_URL);
    return trendingResponse.data;
  } catch (error) {
    throw error;
  }
};

const searchMovie = async (query: any) => {
  if (!query) return;

  try {
    const searchResponse = await axiosInstance.get(SEARCH_URL, {
      params: {
        query,
      },
    });
    return searchResponse.data;
  } catch (error) {
    throw error;
  }
};

export const useGetTrending = () => {
  return useQuery("data", getTrending, { cacheTime: 24 * (60 * 60000) });
};

export const useSearch = (query: string | null) => {
  return useQuery(["data", query], () => searchMovie(query));
};
