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
  handleFilter,
  setCurrentPage,
}) => {
  const handleSortType = (sortType) => {
    setCurrentPage(1);
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
                  onClick={() => handleFilter(filterGenreIds[index])}
                >
                  {it}
                </Dropdown.Item>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return null;
};

export default CustomDropdown;
