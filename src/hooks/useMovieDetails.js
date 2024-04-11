/**
 * api 가져오고
 * usequery 쓰기
 */

import apiInstance from "../utils/api";
import { useQuery } from "@tanstack/react-query";

const fetchDetailapi = (id) => {
  return apiInstance.get(`/movie/${id}`);
};

export const useMovieDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie_details", id],
    queryFn: () => fetchDetailapi(id),
    select: (result) => result.data,
  });
};
