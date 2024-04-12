import React from "react";
import * as S from "./../../pages/MovieDetail/MovieDetail.style";
import { useMovieReviewsQuery } from "../../hooks/useMovieReview.js";
import Alert from "react-bootstrap/Alert";

const MovieReviews = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieReviewsQuery(id);

  // const { results } = data;

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  return (
    <S.Review>
      <h1>Review</h1>
      <S.ReviewBoard>
        <S.ReviewItem>
          {data.results?.map((it, index) => {
            return (
              <S.Item key={index}>
                <h1>{it.author}</h1>
                <div>{it.content}</div>
              </S.Item>
            );
          })}
        </S.ReviewItem>
      </S.ReviewBoard>
    </S.Review>
  );
};

export default MovieReviews;
