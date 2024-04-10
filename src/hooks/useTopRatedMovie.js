import { useQuery } from "@tanstack/react-query";
import apiInstance from "./../utils/api";

const fetchTopRatedMovie = () => {
  return apiInstance.get(`movie/top_rated`);
};

export const useTopRatedUseQuery = () => {
  return useQuery({
    queryKey: ["top-rated"],
    queryFn: fetchTopRatedMovie,
    select: (result) => result.data,
  });
};
