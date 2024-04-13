import React, { useState } from "react";
import { Container } from "../../components/Container/Container.style";
import { useMovieDetailQuery } from "../../hooks/useMovieDetails";
import { useParams } from "react-router-dom";
import * as S from "./MovieDetail.style";
import MovieInfo from "../../components/MovieDetail/MovieInfo";
import MovieReviews from "../../components/MovieDetail/Reviews/MovieReviews";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MovieRecommendation from "../../components/MovieDetail/Recommendation/MovieRecommendation";
import MoviePreview from "../../components/MovieDetail/Preview/MoviePreview";

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
 *
 * 1) detailpage 전환시 최상단으로 view
 */
const MovieDetail = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

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
    return <Navigate to="/not-found" error={error} replace />;
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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container>
      <S.IntroduceWrapper>
        <S.Backdrop
          $backdroppath={`https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/${backdrop_path}`}
        >
          <S.Bottomlayout />
        </S.Backdrop>
        <S.CenterContainer>
          <S.Introduce>
            <S.MovieImgGuideWrapper>
              <S.MovieImg>
                <S.Img
                  $posterppath={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                ></S.Img>
              </S.MovieImg>
              <MovieInfo
                value={{
                  dataTextMap,
                  etcBadge,
                  genres,
                  title,
                  tagline,
                  vote_average,
                  popularity,
                  adult,
                }}
              />
            </S.MovieImgGuideWrapper>
            <S.MovieOverviewWrapper>{overview}</S.MovieOverviewWrapper>
          </S.Introduce>
        </S.CenterContainer>
      </S.IntroduceWrapper>

      <S.TabBtnWrapper>
        <S.ReviewsTab
          onClick={() => handleTabClick("reviews")}
          className={activeTab === "reviews" ? "active" : ""}
        >
          Reviews
        </S.ReviewsTab>
        <S.RecommendationTab
          onClick={() => handleTabClick("Recommendation")}
          className={activeTab === "Recommendation" ? "active" : ""}
        >
          Recommendation
        </S.RecommendationTab>
        <S.PreviewTab
          onClick={() => handleTabClick("preview")}
          className={activeTab === "preview" ? "active" : ""}
        >
          예고편보기
          {/* <Button
            variant="danger"
            onClick={() => setModalShow(true)}
            style={{ backgroundColor: "transparent" }}
          >
            Preview
          </Button> */}
        </S.PreviewTab>
      </S.TabBtnWrapper>
      {activeTab === "reviews" && <MovieReviews id={id} />}
      {activeTab === "Recommendation" && <MovieRecommendation id={id} />}
      {activeTab === "preview" && <MoviePreview id={id} />}
    </Container>
  );
};

export default MovieDetail;
