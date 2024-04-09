/**
 * useQuery
 */

import apiInstance from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchMoviesGenres = () => {
  return apiInstance.get("genre/movie/list");
};

export const useMoviesGenresQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMoviesGenres,
    select: (result) => result.data.genres,
    staleTime: 50000,
  });
};
