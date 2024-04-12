import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";

const fetchMovieRecommendations = (id) => {
  return apiInstance.get(`movie/${id}/recommendations`);
};

export const useMovieRecommendationsQuery = (id) => {
  return useQuery({
    queryKey: ["movie_recommendations"],
    queryFn: () => fetchMovieRecommendations(id),
    select: (result) => result.data,
  });
};
