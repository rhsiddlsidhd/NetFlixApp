import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";

const fetchMovieReview = (id) => {
  console.log(id);
  return apiInstance.get(`/movie/${id}/reviews`);
};

export const useMovieReviewsQuery = (id) => {
  return useQuery({
    queryKey: ["movie_reviews", id],
    queryFn: () => fetchMovieReview(id),
    select: (result) => result.data,
  });
};
