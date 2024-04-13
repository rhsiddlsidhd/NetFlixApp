import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";
const fectchMoviePreview = (id) => {
  return apiInstance.get(`movie/${id}/videos`);
};

export const useMoviePreviewQuery = (id) => {
  return useQuery({
    queryKey: ["movie_preview", id],
    queryFn: () => fectchMoviePreview(id),
    select: (result) => result.data,
  });
};
