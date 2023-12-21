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

const MOVIE_DETAILS_URL = `${process.env.REACT_APP_TMDB_BASE_URL}movie`;
const TRENDING_URL = `${process.env.REACT_APP_TMDB_BASE_URL}trending/movie/week`;
const SEARCH_URL = `${process.env.REACT_APP_TMDB_BASE_URL}search/movie`;
const AVAILABLE_ON_URL = `${process.env.REACT_APP_TMDB_BASE_URL}movie`;

const getTrending = async () => {
  try {
    const trendingResponse = await axiosInstance.get(TRENDING_URL);
    return trendingResponse.data;
  } catch (error) {
    throw error;
  }
};

const getMovieDetails = async (movieId: any) => {
  if (!movieId) return;

  try {
    const details = await axiosInstance.get(`${MOVIE_DETAILS_URL}/${movieId}`);
    return details.data;
  } catch (error) {
    throw error;
  }
};

const getMovieCredits = async (movieId: any) => {
  if (!movieId) return;

  try {
    const creditsResponse = await axiosInstance.get(
      `${MOVIE_DETAILS_URL}/${movieId}/credits`
    );
    return creditsResponse.data;
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

const getProviders = async (movieId: any) => {
  try {
    const availableResponse = await axiosInstance.get(
      `${AVAILABLE_ON_URL}/${movieId}/watch/providers?watch_region=BR`
    );
    return availableResponse.data?.results?.BR;
  } catch (error) {
    throw error;
  }
};

export const useGetMovieDetails = (movieId: any) => {
  return useQuery(["movie", movieId], () => getMovieDetails(movieId), {
    cacheTime: 24 * (60 * 60000),
  });
};

export const useGetMovieCredits = (movieId: any) => {
  return useQuery(["movieCredits", movieId], () => getMovieCredits(movieId), {
    cacheTime: 24 * (60 * 60000),
  });
};

export const useGetProviders = (movieId: any) => {
  return useQuery(["data", movieId], () => getProviders(movieId), {
    cacheTime: 24 * (60 * 60000),
  });
};

export const useGetTrending = () => {
  return useQuery("data", getTrending, { cacheTime: 24 * (60 * 60000) });
};

export const useSearch = (query: string | null) => {
  return useQuery(["data", query], () => searchMovie(query));
};
