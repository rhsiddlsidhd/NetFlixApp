import React from "react";
import { useUpComingUseQuery } from "../../../hooks/useUpComingMovie";
import { responsive } from "./../../../constants/responsive";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const UpComingSlide = () => {
  const { data, isError, error, isLoading } = useUpComingUseQuery();

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
    return <Navigate to="/not-found" error={error} replace />;
  }

  return (
    <MovieSlider
      title="UpComing Movies"
      movies={data.results}
      responsive={responsive}
    />
  );
};

export default UpComingSlide;
