import React, { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container.style";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import * as S from "./MoviePage.style";
import { Badge } from "react-bootstrap";
import { useMoviesGenresQuery } from "../../hooks/useMovieListGenres";
import Pagenation from "../../common/Pagenation/Pagenation";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import CustomDropdown from "../../components/Movies/CustomDropdown";

//경로 2가지
//nav 바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌
// https://media.themoviedb.org/t/p/w94_and_h141_bestv2

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

/**
 * 정렬 필터 기능 만들기
 *
 * 하나의 컴포넌트로 두가지 버튼을 전부 구현할 예정
 *
 * 컴포넌트로 각자의 데이터를 props 로 전달
 *
 * props로 components 구성
 *
 * moviePage 데이터로 populariity 로 인기도 높 낮이로 인기도 순위 정렬
 *
 * moviePage 데이터에 있는 장르들을 전부 가져와서 드롭으로 보여주기
 *
 * 원본데이터는 그대로 유지하고
 *
 * 클릭시에는 복사본을 재정렬해서 보여주기
 *
 * 필터 기능 만들기
 *
 * 데이터에 해당하는 genre를
 *
 *
 */
const MoviePage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const [sortType, setSortType] = useState("");
  const [displayData, setDisplayData] = useState(null);
  const [filterGenreIds, setFilterGenreIds] = useState([]);

  const navigate = useNavigate();

  const { data, isError, isLoading, error } = useSearchMovieQuery({
    keyword,
    currentPage,
  });
  const { data: genreData } = useMoviesGenresQuery();

  // useEffect(() => {
  //   if (data && data.results) {
  //     setDisplayData(data.results);

  //     const newGenreIds = data.results.reduce(
  //       (acc, it) => {
  //         it.genre_ids.forEach((genreId) => {
  //           if (!acc.includes(genreId)) {
  //             acc.push(genreId);
  //           }
  //         });
  //         return acc;
  //       },
  //       [...filterGenreIds]
  //     );

  //     setFilterGenreIds(newGenreIds);
  //   }
  // }, [data]);
  useEffect(() => {
    if (data && data.results) {
      setDisplayData(data.results);

      setFilterGenreIds((prevGenreIds) => {
        const newGenreIds = data.results.reduce(
          (acc, it) => {
            it.genre_ids.forEach((genreId) => {
              if (!acc.includes(genreId)) {
                acc.push(genreId);
              }
            });
            return acc;
          },
          [...prevGenreIds]
        );
        return newGenreIds;
      });
    }
  }, [data]);

  const handleFilter = (selectedGenreId) => {
    setCurrentPage(1);
    if (!data) {
      return [];
    }

    const filteredData = data.results.filter((movie) =>
      movie.genre_ids.includes(selectedGenreId)
    );

    setDisplayData(filteredData);
  };

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

  const handleMoviePageNavigate = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Container>
      <div>
        <S.KeywordHeader>
          <h2>Search results for {keyword ? keyword : "Popular"}</h2>
          <S.DropdownWrapper>
            <CustomDropdown
              //data의 인기를 가져오기
              title="정렬"
              data={data}
              setDisplayData={setDisplayData}
              setSortType={setSortType}
              sortType={sortType}
              displayData={displayData}
              setCurrentPage={setCurrentPage}
            />
            <CustomDropdown
              title="필터"
              filterGenreIds={filterGenreIds}
              genreData={genreData}
              handleFilter={handleFilter}
            />
          </S.DropdownWrapper>
        </S.KeywordHeader>

        <S.KeyWordBoard>
          {displayData &&
            displayData.map((it, index) => {
              return (
                <S.KeyWordItem key={index}>
                  <div
                    className="img_wrapper"
                    onClick={() => handleMoviePageNavigate(it.id)}
                  >
                    <img
                      src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${it.poster_path}`}
                      alt="이미지"
                    />
                  </div>
                  <div className="keyword_introduce">
                    <div className="title">{it.title}</div>
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
        pageGroup={pageGroup}
        setPageGroup={setPageGroup}
      />
    </Container>
  );
};

export default MoviePage;
