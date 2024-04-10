import { useQuery } from "@tanstack/react-query";
import apiInstance from "../utils/api";

// const fetchSearchMovie = ({ keyword, page }) => {
//   return keyword
//     ? apiInstance.get(`/search/movie?query=${keyword}&page=${page}`)
//     : apiInstance.get(`/movie/popular&page=${page}`);
// };

const fetchSearchMovie = ({ keyword, currentPage }) => {
  console.log("api", currentPage);
  return keyword
    ? apiInstance.get(`/search/movie?query=${keyword}&page=${currentPage}`)
    : apiInstance.get(`/movie/popular?page=${currentPage}`);
};

export const useSearchMovieQuery = ({ keyword, currentPage }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, currentPage }],
    queryFn: () => fetchSearchMovie({ keyword, currentPage }),
    select: (result) => result.data,
  });
};
