import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieNewCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleMovieDetailPage = (id) => {
    navigate(`/movies/${id}`);
  };
  return (
    <MovieMiniCardWrapper
      $RecommendationPosterPath={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
      onClick={() => handleMovieDetailPage(movie.id)}
    >
      {/* <MiniCardOverlay></MiniCardOverlay> */}
    </MovieMiniCardWrapper>
  );
};

export default MovieNewCard;

const MovieMiniCardWrapper = styled.div`
  width: 20%;
  height: 300px;
  background: url(${(props) => props.$RecommendationPosterPath});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: scale(1.3);
    transition: 1s;
    z-index: 5;
  }

  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;

// const MiniCardOverlay = styled.div`
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   background: linear-gradient(to top, #000000b9, transparent);
//   opacity: 0;
//   &:hover {
//     opacity: 1;
//   }
// `;
