import React from "react";
import { Container } from "../../components/Container/Container.style";
import { useMovieDetailQuery } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import { Alert } from "bootstrap";
import { styled } from "styled-components";
import Stack from "react-bootstrap/Stack";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
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
    adult,
    budget,
    revenue,
    release_date,
    runtime,
    overview,
  } = data;

  const etcBadge = ["Budget", "Revenue", "ReleaseDate", "Runtime"];
  const dataTextMap = {
    Budget: "$" + budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    Revenue: "$" + revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    ReleaseDate: release_date,
    Runtime: runtime,
  };

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
                    style={{ width: "100%", flexWrap: "wrap", height: "25%" }}
                  >
                    {genres?.map((it, index) => {
                      return (
                        <Badge bg="danger" key={index}>
                          {it.name}
                        </Badge>
                      );
                    })}
                  </Stack>
                  <div className="info_title">
                    <div>{title}</div>
                    {adult ? (
                      <Badge className="age" bg="danger">
                        18 +
                      </Badge>
                    ) : (
                      <Badge className="age" bg="primary">
                        18 -{" "}
                      </Badge>
                    )}
                  </div>
                  <div className="info_tagline">{tagline}</div>
                </InfoTag>
                <InfoLike>
                  <div>
                    <div>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "yellow" }}
                      />
                    </div>
                    <div style={{ color: "white", marginLeft: "0.5rem" }}>
                      {vote_average.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "red" }}
                      />
                    </div>
                    <div style={{ color: "white", marginLeft: "0.5rem" }}>
                      {popularity.toFixed(1)}
                    </div>
                  </div>
                </InfoLike>
                <InfoEtcWrapper>
                  {etcBadge.map((it, index) => {
                    return (
                      <InfoEtc>
                        <Badge key={index} className="badge" bg="danger">
                          {it}
                        </Badge>
                        <div style={{ color: "white" }}>{dataTextMap[it]}</div>
                      </InfoEtc>
                    );
                  })}
                </InfoEtcWrapper>
              </Info>
            </MovieDescription>
            <MovieOverview>{overview}</MovieOverview>
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
  height: 80vh;
  border-bottom: 1px solid gray;
  @media screen and (max-width: 767px) {
    min-height: 130vh;
  }
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
  }
  @media screen and (max-width: 767px) {
    height: 100vh;
  }
`;

const MovieDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 90vh;
    min-width: 370px;
  }
`;

const PosterBox = styled.div`
  min-width: 300px;
  height: 100%;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 50vh;
  }
`;

const Poster = styled.div`
  min-width: 300px;
  height: 100%;
  position: absolute;
  top: -2rem;
  background: url(${(props) => props.$posterppath});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Info = styled.div`
  width: calc(90% - 300px);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    min-height: 300px;
  }
`;

const InfoTag = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  .info_title {
    display: flex;
    align-items: center;
    color: white;
    height: 40%;

    > div {
      display: flex;
      align-items: center;
      height: 100%;
      font-weight: bold;
      font-size: 1.5rem;
    }
    > .age {
      margin-left: 1rem;
    }
  }
  .info_tagline {
    font-size: 0.8rem;
    color: white;
    height: 35%;
  }
`;

const InfoLike = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  margin-bottom: 1rem;
  > div {
    margin-right: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const InfoEtcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  margin-bottom: 1rem;
`;

const InfoEtc = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  > div:last-child {
    margin-left: 1rem;
  }
`;

const MovieOverview = styled.div`
  height: 40%;

  @media screen and (max-width: 767px) {
    height: 30vh;
    min-width: 370px;
  }
`;

const MovieReviewWrapper = styled.div`
  height: 60vh;
`;
