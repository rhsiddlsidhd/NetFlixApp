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

const Detail = () => {
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
              {/* <InfoEtcWrapper>
                {etcBadge.map((it, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div className="row" key={index}>
                        <div className="col">
                          <InfoEtc>
                            <Badge className="badge" bg="danger">
                              {it}
                            </Badge>
                            <div style={{ color: "white" }}>
                              {dataTextMap[it]}
                            </div>
                          </InfoEtc>
                        </div>
                        {etcBadge[index + 1] && (
                          <div className="col">
                            <InfoEtc>
                              <Badge className="badge" bg="danger">
                                {etcBadge[index + 1]}
                              </Badge>
                              <div style={{ color: "white" }}>
                                {dataTextMap[etcBadge[index + 1]]}
                              </div>
                            </InfoEtc>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </InfoEtcWrapper> */}
              {/* <InfoEtcWrapper>
                <InfoEtc>
                  <InfoLeft>
                    <InfoItem>
                      <div>아이콘</div>
                      <div>숫자</div>
                    </InfoItem>
                    <InfoItem>
                      <div>아이누</div>
                      <div>165</div>
                    </InfoItem>
                  </InfoLeft>
                  <InfoRight>
                    <InfoItem>
                      <div>아이콘</div>
                      <div>숫자</div>
                    </InfoItem>
                    <InfoItem>
                      <div>아이누</div>
                      <div>165</div>
                    </InfoItem>
                  </InfoRight>
                </InfoEtc>
              </InfoEtcWrapper> */}
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
          <MovieOverviewWrapper>4555555</MovieOverviewWrapper>
        </Introduce>
        <Review>Review</Review>
      </IntroduceWrapper>
    </Container>
  );
};

export default Detail;
const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    /* height: 120vh;
    min-height: 120vh; */
    min-width: 300px;
  }
`;
const Backdrop = styled.div`
  height: 35vh;
  background-image: url(${(props) => props.$backdroppath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  /* @media screen and (max-width: 767px) {
    height: 30vh;
  } */
`;

const Bottomlayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black, transparent 90%);
`;

const Introduce = styled.div`
  height: 35vh;
  /* border: 1px solid yellow; */
  background-color: yellow;
  @media screen and (max-width: 767px) {
    height: 75vh;
    min-width: 300px;
  }
`;

const MovieImgGuideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 70%;
    border: 1px solid green;
    background-color: green;
  }
`;
const MovieImg = styled.div`
  width: 300px;
  min-width: 300px;
  position: relative;
  border: 1px solid red;

  @media screen and (max-width: 767px) {
    //이미지 사이즈 반응형
    height: 50%;
    min-height: 200px;
  }
`;

const Img = styled.div`
  min-width: 300px;
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
  /* background-color: blue; */
  background-color: yellow;
  @media screen and (max-width: 767px) {
    border: 2px solid brown;
    width: 100%;
    height: 50%;
    margin-left: 0rem;
  }
`;

const InfoTag = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  /* background-color: purple; */
  border: 5px solid purple;

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

  border: 5px solid red;
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
  height: 30%;
  display: flex;
  /* flex-direction: column; */
  border: 5px solid white;
  @media screen and (max-width: 767px) {
    /* height: 35%; */
    /* justify-content: center; */
  }
`;

const InfoEtc = styled.div`
  /* display: flex; */
  /* height: 100%; */
  /* justify-content: center; */
  /* align-items: center;  */
  /* justify-content: center; */
  /* margin-bottom: 0.5rem; */

  /* > div:last-child { */
  /* margin-left: 1rem; */
  /* } */
  /* @media screen and (max-width: 767px) {
    flex-direction: column;
  } */

  /* ================ */
  width: 50%;
  min-width: 400px;
  height: 100%;
  border: 1px solid red;
  display: flex;
  @media screen and (max-width: 767px) {
    /* width: 50%; */
    min-width: 300px;
    width: 100%;
  }
`;

const InfoLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: pink;
`;

const InfoRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: blue;
`;

const InfoItem = styled.div`
  display: flex;

  .badge {
    border: 3px solid green;
    height: fit-content;
    margin-right: 0.5rem;
  }
  .badge_text {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 0.725rem;
  }
`;

const MovieOverviewWrapper = styled.div`
  background-color: red;
  height: 40%;
  @media screen and (max-width: 767px) {
    height: 30%;
  }
`;

const Review = styled.div`
  height: 35vh;
  border: 1px solid green;
`;
