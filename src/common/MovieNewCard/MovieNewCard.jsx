import React from "react";
import { styled } from "styled-components";

const MovieNewCard = ({ movie }) => {
  return (
    <MovieMiniCardWrapper
      $RecommendationPosterPath={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
    ></MovieMiniCardWrapper>
  );
};

export default MovieNewCard;

const MovieMiniCardWrapper = styled.div`
  width: 20%;
  height: 300px;
  background: url(${(props) => props.$RecommendationPosterPath});
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;
