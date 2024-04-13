import React from "react";
import * as S from "../../../pages/MovieDetail/MovieDetail.style.jsx";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReview.js";
import Spinner from "react-bootstrap/Spinner";

/**
 *
 * 더보기 버튼
 *
 * 해당 데이터의 길이를 추적
 *
 * 원하는 길이양을 초과했을때 숨기기
 *
 * 클릭시 보여주기
 *
 * 접기 클릭시 다시 숨기기
 */

const MovieReviews = ({ id }) => {
  const { data, isLoading, isError, error } = useMovieReviewsQuery(id);

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
    <S.Review>
      <h1>Review({data.results.length})</h1>
      <S.ReviewBoard>
        {data.results?.map((it, index) => {
          return (
            <S.Item key={index}>
              <h1>{it.author}</h1>
              <div className="cotent">{it.content}</div>
            </S.Item>
          );
        })}
      </S.ReviewBoard>
    </S.Review>
  );
};

export default MovieReviews;
