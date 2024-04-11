import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h2
        style={{
          color: "white",
          marginLeft: "1rem",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        {title}
      </h2>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} index={index} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
