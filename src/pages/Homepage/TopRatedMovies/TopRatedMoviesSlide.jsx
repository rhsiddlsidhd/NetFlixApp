import React from "react";
import { useTopRatedUseQuery } from "../../../hooks/useTopRatedMovie";

import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";
import Spinner from "react-bootstrap/Spinner";
const TopRatedMoviesSlide = () => {
  const { data, isError, error, isLoading } = useTopRatedUseQuery();

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "black",
        }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  if (isError) {
    return <h1>Error!! {error.message}</h1>;
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
