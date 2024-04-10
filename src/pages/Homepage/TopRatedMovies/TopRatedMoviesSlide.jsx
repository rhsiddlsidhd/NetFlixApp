import React from "react";
import { useTopRatedUseQuery } from "../../../hooks/useTopRatedMovie";
import { Alert } from "bootstrap";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";

const TopRatedMoviesSlide = () => {
  const { data, isError, error, isLoading } = useTopRatedUseQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <MovieSlider
      title="TopRated Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default TopRatedMoviesSlide;
