import React from "react";
import { useUpComingUseQuery } from "../../../hooks/useUpComingMovie";
import { Alert } from "bootstrap";
import { responsive } from "./../../../constants/responsive";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";

const UpComingSlide = () => {
  const { data, isError, error, isLoading } = useUpComingUseQuery();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <MovieSlider
      title="UpComing Movies"
      movies={data}
      responsive={responsive}
    />
  );
};

export default UpComingSlide;
