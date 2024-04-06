import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchPopullarMovies = () => {
  return api.get(`movie/popular`);
};
export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopullarMovies,
    select: (result) => result.data,
  });
};
