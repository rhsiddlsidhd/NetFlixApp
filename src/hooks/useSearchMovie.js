import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";

const fetchSearchMovie = ({ keyword }) => {
  return keyword
    ? apiInstance.get(`/search/movie?query=${keyword}`)
    : apiInstance.get("/movie/popular");
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    // select: (result) => result.data.results,
    select: (result) => result.data,
  });
};
