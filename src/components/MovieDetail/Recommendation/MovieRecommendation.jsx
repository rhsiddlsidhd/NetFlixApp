import React from "react";
import { useMovieRecommendationsQuery } from "../../../hooks/useMovieRecommendations";
import Spinner from "react-bootstrap/Spinner";
import * as S from "../../../pages/MovieDetail/MovieDetail.style";
import MovieNewCard from "../../../common/MovieNewCard/MovieNewCard";

const MovieRecommendation = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieRecommendationsQuery(id);

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
    <S.Recommendation>
      <h1>Recommendation({data.results.length})</h1>
      <S.RecommendationBoard>
        <S.RecommendationItem>
          {data.results.map((movie, index) => {
            return <MovieNewCard movie={movie} key={index} />;
          })}
        </S.RecommendationItem>
      </S.RecommendationBoard>
    </S.Recommendation>
  );
};

export default MovieRecommendation;
