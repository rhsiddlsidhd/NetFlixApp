import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.jsx";
import * as S from "./MovieCard.style.jsx";
import ProgressBar from "react-bootstrap/ProgressBar";
import Stack from "react-bootstrap/Stack";
const MovieCard = ({ movie, index }) => {
  console.log(index);
  return (
    <S.MovieCardWrapper>
      <S.MovieImage
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
        }}
      >
        <S.Ranking>{index + 1}</S.Ranking>
        <S.MovieOverlay>
          {/* 타이틀 평점 장르 설명 인물 */}
          <S.OverlayTitle>
            {movie.title}({movie.release_date.slice(0, 4)})
          </S.OverlayTitle>
          <S.OverlayAverage>
            <ProgressBar
              now={movie.vote_average}
              max={10}
              variant="info"
              label={`${movie.vote_average.toFixed(2)}%`}
              striped
              animated
              className="progressbar_average"
            />
            <div className="vote_average">{movie.vote_average.toFixed(2)}</div>
            <div className="vote_counter">({movie.vote_count}명)</div>
          </S.OverlayAverage>
          <Stack direction="horizontal" gap={1}>
            {movie.genre_ids.map((id, index) => (
              <Badge className="badge" bg="danger" key={index}>
                {id}
              </Badge>
            ))}
          </Stack>
          <S.Overview>{movie.overview}</S.Overview>
        </S.MovieOverlay>
      </S.MovieImage>
      <S.MovieIntroduction>
        <div>
          {movie.adult ? (
            <Badge bg="danger">18 +</Badge>
          ) : (
            <Badge bg="primary">18 - </Badge>
          )}
        </div>
      </S.MovieIntroduction>
    </S.MovieCardWrapper>
  );
};

export default MovieCard;
