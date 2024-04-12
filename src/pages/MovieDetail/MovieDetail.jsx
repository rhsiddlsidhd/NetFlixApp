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

  const etcBadge = ["Budget", "Revenue", "Runtime", "ReleaseDate"];
  const dataTextMap = {
    Budget: "$" + budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    Revenue: "$" + revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    ReleaseDate: release_date,
    Runtime: runtime,
  };

  return (
    <Container>
      <IntroduceWrapper>
        <Backdrop
          $backdroppath={`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/${backdrop_path}`}
        >
          <Bottomlayout />
        </Backdrop>
        <Introduce>
          <MovieImgGuideWrapper>
            <MovieImg>
              <Img
                $posterppath={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
              ></Img>
            </MovieImg>
            <MovieGuide>
              <InfoTag>
                <Stack
                  direction="horizontal"
                  gap={2}
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
                    <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                  </div>
                  <div style={{ color: "white", marginLeft: "0.5rem" }}>
                    {popularity.toFixed(1)}
                  </div>
                </div>
              </InfoLike>
              <InfoEtcWrapper>
                <InfoEtc>
                  <InfoLeft>
                    {etcBadge.map((it, index) => {
                      if (index % 2 === 0) {
                        return (
                          <InfoItem>
                            <Badge className="badge" bg="danger">
                              {it}
                            </Badge>
                            <div className="badge_text">{dataTextMap[it]}</div>
                          </InfoItem>
                        );
                      }
                      return null;
                    })}
                  </InfoLeft>
                  <InfoRight>
                    {etcBadge.map((it, index) => {
                      if (index % 2 !== 0) {
                        return (
                          <InfoItem>
                            <Badge className="badge" bg="danger">
                              {it}
                            </Badge>
                            <div className="badge_text">{dataTextMap[it]}</div>
                          </InfoItem>
                        );
                      }
                      return null;
                    })}
                  </InfoRight>
                </InfoEtc>
              </InfoEtcWrapper>
            </MovieGuide>
          </MovieImgGuideWrapper>
          <MovieOverviewWrapper>{overview}</MovieOverviewWrapper>
        </Introduce>
        <Review>Review</Review>
      </IntroduceWrapper>
    </Container>
  );
};

export default MovieDetail;
const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 767px) {
    /* min-width: 300px; */
    /* min-width: 250px; */
  }
`;
const Backdrop = styled.div`
  height: 35vh;
  background-image: url(${(props) => props.$backdroppath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Bottomlayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black, transparent 90%);
`;

const Introduce = styled.div`
  height: 80%;

  @media screen and (max-width: 767px) {
    /* height: 75vh; */
    height: 75%;
    /* min-width: 300px;
     */
    /* min-width: 250px; */
  }
`;

const MovieImgGuideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 70%;
  }
`;
const MovieImg = styled.div`
  width: 300px;
  /* min-width: 300px; */
  /* min-width: 250px; */
  position: relative;

  @media screen and (max-width: 767px) {
    height: 50%;
    min-height: 200px;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -2rem;
  background: url(${(props) => props.$posterppath});
  background-repeat: no-repeat;
  background-size: contain;
`;
const MovieGuide = styled.div`
  width: 60%;
  margin-left: 1rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50%;

    margin-left: 0rem;
  }
`;

const InfoTag = styled.div`
  height: 60%;
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
  @media screen and (max-width: 767px) {
    height: 55%;
  }
`;

const InfoLike = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;

  > div {
    margin-right: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`;

const InfoEtcWrapper = styled.div`
  height: 30%;
  display: flex;
`;

const InfoEtc = styled.div`
  width: 50%;
  /* min-width: 400px; */
  /* min-width: 250px; */
  height: 100%;

  display: flex;
  @media screen and (max-width: 767px) {
    /* min-width: 300px; */
    /* min-width: 250px; */
    width: 100%;
  }
`;

const InfoLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const InfoRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: white;

  .badge {
    display: flex;
    height: 100%;
    margin-right: 0.5rem;

    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  }
  .badge_text {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 0.725rem;
  }
`;

const MovieOverviewWrapper = styled.div`
  /* height: 40%; */
  /* flex-grow: 1; */
  color: white;
  background-color: red;
  @media screen and (max-width: 767px) {
    height: 30%;
  }
`;

const Review = styled.div`
  height: 35%;
`;
