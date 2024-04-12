import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovie";
import "./Banner.style.css";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

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
    <div className="banner_wrapper">
      <div
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path})`,
        }}
        className="banner"
      >
        <div className="text-white banner-text-area">
          <h3>{data?.results[0].title}</h3>
          <p>{data?.results[0].overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
