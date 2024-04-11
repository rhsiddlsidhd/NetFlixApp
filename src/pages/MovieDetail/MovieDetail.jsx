import React from "react";
import { Container } from "../../components/Container/Container.style";
import { useMovieDetailQuery } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { styled } from "styled-components";
import Stack from "react-bootstrap/Stack";
import { Badge } from "react-bootstrap";
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

  const {
    backdrop_path,
    poster_path,
    genres,
    title,
    tagline,
    vote_average,
    popularity,
  } = data;

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

              <Info>
                <InfoTag>
                  <Stack
                    direction="horizontal"
                    gap={1}
                    style={{ width: "100%", flexWrap: "wrap" }}
                  >
                    {genres?.map((it, index) => {
                      return (
                        <Badge bg="danger" key={index}>
                          {it.name}
                        </Badge>
                      );
                    })}
                  </Stack>
                  <div className="info_title">{title}</div>
                  <div className="info_tagline">{tagline}</div>
                </InfoTag>
                <InfoLike>
                  <div>
                    <div>icon</div>
                    <div>{vote_average}</div>
                  </div>
                  <div>
                    <div>icon</div>
                    <div>{popularity}</div>
                  </div>
                  <div>adult</div>
                </InfoLike>
                <InfoEtc>
                  <div>budget</div>
                  <div>revenue</div>
                  <div>ReleaseDate</div>
                  <div>Runtime</div>
                </InfoEtc>
              </Info>
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

const InfoTag = styled.div`
  width: 100%;

  height: 40%;
  display: flex;
  flex-direction: column;
  > div {
    height: 33%;
    color: white;
    @media screen and (max-width: 767px) {
      height: fit-content;
    }
  }
  .info_title {
    font-weight: bold;
    font-size: 1.7rem;
    @media screen and (max-width: 767px) {
      font-size: 1.3rem;
    }
  }
  .info_tagline {
    @media screen and (max-width: 767px) {
      font-size: 0.8rem;
    }
  }
`;

const InfoLike = styled.div`
  display: flex;
  width: 100%;
  height: 10%;

  > div {
    margin-right: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

const InfoEtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin-bottom: 1rem;
`;

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
  display: flex;
  justify-content: center;
  > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    > div:last-child {
      border: 3px solid yellow;
    }
  }
`;

const MovieDescription = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const PosterBox = styled.div`
  min-width: 300px;
  height: 100%;
  border: 2px solid blue;
  position: relative;
`;

const Poster = styled.div`
  min-width: 300px;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  top: -2rem;
  background: url(${(props) => props.$posterppath});
  background-repeat: no-repeat;
  background-size: contain;
`;

const MovieReviewWrapper = styled.div`
  height: 60vh;
`;

const Info = styled.div`
  width: calc(90% - 300px);
  border: 1px solid green;
  @media screen and (max-width: 767px) {
    width: 100%;
    min-width: 300px;
    height: 80%;
  }
`;
