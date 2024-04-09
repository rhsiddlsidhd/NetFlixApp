// api
import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";

const fetchUpComingMovies = () => {
  return apiInstance.get(`movie/upcoming`);
};

export const useUpComingUseQuery = () => {
  return useQuery({
    queryKey: ["up-coming"],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data.results,
  });
};
