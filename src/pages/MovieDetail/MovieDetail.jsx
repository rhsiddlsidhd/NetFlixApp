import React from "react";
import { Container } from "../../components/Container/Container.style";
import { useMovieDetailQuery } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { styled } from "styled-components";
/**
 * 영화 포스터
 * 영화 제목
 * 영화 장르
 * 영화 인기도
 * 영화 줄거리
 * 영화 예산
 * 영화 개봉일
 * 영화리뷰
 *
 * backdrop url 'https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/rMKFsYeK3LPJGk9xqUHhGdqA4aB.jpg'
 *
 * post url https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xLBbOZCXLxYbtIOjC03dKxLlKqR.jpg
 */
const MovieDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log(data);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  const { backdrop_path, poster_path } = data;

  return (
    <Container>
      <MovieIntroduceWrapper>
        <MovieBackdrop
          $backdroppath={`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/${backdrop_path}`}
        >
          <Bottomlayout />
        </MovieBackdrop>
        <MovieIntroduce>
          <div>
            <MovieDescription>
              <PosterBox>
                <Poster
                  $posterppath={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                ></Poster>
              </PosterBox>
              <Info>123</Info>
            </MovieDescription>
            <div>123</div>
          </div>
        </MovieIntroduce>
      </MovieIntroduceWrapper>
      <MovieReviewWrapper></MovieReviewWrapper>
    </Container>
  );
};

export default MovieDetail;

const MovieIntroduceWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MovieBackdrop = styled.div`
  height: 35%;
  background-image: url(${(props) => props.$backdroppath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  @media screen and (max-width: 767px) {
    height: 30vh;
  }
`;
const Bottomlayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black, transparent 90%);
`;

const MovieIntroduce = styled.div`
  height: 65%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  > div {
    width: 80%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
`;
const MovieDescription = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
`;

const PosterBox = styled.div`
  width: 35%;
  height: 100%;
  border: 1px solid blue;
  position: relative;
`;

const Poster = styled.div`
  width: 100%;
  height: 450px;

  border: 1px solid red;
  position: absolute;
  top: -2rem;
  background: url(${(props) => props.$posterppath});
  background-repeat: no-repeat;
  background-size: contain;
`;

const MovieReviewWrapper = styled.div`
  height: 60vh;
  border: 1px solid red;
`;

const Info = styled.div`
  width: 65%;
  border: 1px solid green;
`;
