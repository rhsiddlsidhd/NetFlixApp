import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./CustomDropdown.style.css";
import { handleLowSort, handleHighSort } from "../../utils/sort";
const CustomDropdown = ({
  title,
  data,
  setDisplayData,
  setSortType,
  sortType,
  displayData,
  filterGenreIds,
  genreData,
}) => {
  const handleSortType = (sortType) => {
    setSortType(sortType);
    if (sortType === "LowPopularity") {
      const sortedData = handleLowSort(data);

      setDisplayData(sortedData);
    }
    if (sortType === "HighPopularity") {
      const sortedData = handleHighSort(data);

      setDisplayData(sortedData);
    }
  };

  const showGenre = (genreIdList) => {
    if (!genreIdList) {
      return [];
    }
    const genreNameList = genreIdList.map((it) => {
      const genreObj = genreData.find((genre) => genre.id === it);
      return genreObj.name;
    });

    return genreNameList;
  };

  /**
   * 장르 id와 일치하는 name을 전부 필터로 가져왔고
   *
   * 해당 name 에 해당하는 id 값을 데이터에 일치시켜서 그것만 보여주면됨
   *
   * handle로 데이터를 가져오지 못하는 상황
   * id만 가져와서 인수 두개 받는 함수로 재 실행해서 set
   */

  const handleFilterId = (id) => {
    console.log(data);

    // console.log("요기");
    // const filteredData = [...data.results].filter((movie) => {
    //   return movie.genre_ids.includes(selectedGenreId);
    // });

    // setDisplayData(filteredData);
  };

  if (title === "정렬") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#"
            onClick={() => handleSortType("HighPopularity")}
          >
            오름차순
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => handleSortType("LowPopularity")}
          >
            내림차순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else if (title === "필터") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {filterGenreIds &&
            showGenre(filterGenreIds).map((it, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  href="#"
                  onClick={() => handleFilterId(filterGenreIds[index])}
                >
                  {it}
                </Dropdown.Item>
              );
            })}
          {/* <Dropdown.Item href="#">필터</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return null;
};

export default CustomDropdown;
