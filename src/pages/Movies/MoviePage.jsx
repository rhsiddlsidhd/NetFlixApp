import React from "react";
import { Container } from "../../components/Container/Container";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "bootstrap";
import * as S from "./MoviePage.style";
import { Badge } from "react-bootstrap";
import { useMoviesGenresQuery } from "../../hooks/useMovieListGenres";
import Pagination from "react-bootstrap/Pagination";

//경로 2가지
//nav 바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌
// https://media.themoviedb.org/t/p/w94_and_h141_bestv2

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isError, isLoading, error } = useSearchMovieQuery({ keyword });

  console.log(data);
  const { data: genreData } = useMoviesGenresQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
          <Pagination.Prev />
          <Pagination variant="link">{items}</Pagination>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
    </Container>
  );
};

export default MoviePage;
