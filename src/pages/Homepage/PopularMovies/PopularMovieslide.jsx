import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovie";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMoviesSlide.style.css";

const PopularMovieslide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  console.log(data);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2050, min: 1150 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1150, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h2>Popular Movies</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="movie-slider"
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} index={index} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieslide;
