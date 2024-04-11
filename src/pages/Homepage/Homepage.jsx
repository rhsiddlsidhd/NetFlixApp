import React from "react";
import { Container } from "../../components/Container/Container.style";
import Banner from "./Banner/Banner";
import PopularMovieslide from "./PopularMovies/PopularMovieslide";
import TopRatedMoviesSlide from "./TopRatedMovies/TopRatedMoviesSlide";
import UpComingSlide from "./UpComingMovies/UpComingSlide";

const Homepage = () => {
  /**
   * 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
   * popular movie
   * top rated movie
   * upcoming movie
   */

  return (
    <Container>
      <Banner />
      <PopularMovieslide />
      <br />
      <TopRatedMoviesSlide />
      <br />
      <UpComingSlide />
    </Container>
  );
};

export default Homepage;
