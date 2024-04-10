import React, { useState } from "react";
import { Container } from "../../components/Container/Container";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import * as S from "./MoviePage.style";
import { Badge } from "react-bootstrap";
import { useMoviesGenresQuery } from "../../hooks/useMovieListGenres";
import Pagenation from "../../common/Pagenation/Pagenation";

//경로 2가지
//nav 바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌
// https://media.themoviedb.org/t/p/w94_and_h141_bestv2

const MoviePage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isError, isLoading, error } = useSearchMovieQuery({
    keyword,
    currentPage,
  });

  /**
   * 총페이지데이터는 data.total_pages
   * 페이지당 아이템 개수 result.length
   * 버튼 개수는 data.total_pages / 5 개씩 해서 그룹으로 1 ,2 ,3 그룹으로 나누기
   * ex) 43494 / 5 = 8498.8 임으로 ceil 써서 8499 그룹이 생성됨
   * 1~8499 버튼을 5개씩만 Ui에 보여주기
   * 버튼 렌더링 startPage EndPage 구해주기
   * 1그룹을 가져왔을때 1 ~ 5 까지 렌더링
   * 10그룹 가져오면 50 ~ 55 까지 렌더링
   * (currentGroup - 1 ) * 5 + 1 1그룹시 page 0 2그룹시 page6
   * Math.min(currentGroup * 5, totalPages);
   */

  const { data: genreData } = useMoviesGenresQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  const showGenre = (genreIdList) => {
    if (!genreData) {
      return [];
    }
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <Container>
      <div>
        <h2
          style={{
            color: "white",
            marginLeft: "1rem",
            paddingTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          Search results for {keyword ? keyword : "Popular"}
        </h2>
        <S.KeyWordBoard>
          {data.results.map((it, index) => {
            return (
              <S.KeyWordItem key={index}>
                <img
                  src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${it.poster_path}`}
                  alt="이미지"
                />
                <div className="keyword_introduce">
                  <div>{it.title}</div>
                  <div className="genre">
                    {showGenre(it.genre_ids).map((it, index) => {
                      return (
                        <Badge className="badge" bg="danger" key={index}>
                          {it}
                        </Badge>
                      );
                    })}
                  </div>
                  <div>{it.overview}</div>
                </div>
              </S.KeyWordItem>
            );
          })}
        </S.KeyWordBoard>
      </div>
      <Pagenation
        setCurrentPage={setCurrentPage}
        dataTotalPage={data.total_pages}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default MoviePage;
