import React, { useEffect, useState } from "react";
import * as S from "./Pagenation.style";

const Pagenation = ({ ...rest }) => {
  const {
    setCurrentPage,
    dataTotalPage,
    currentPage,
    pageGroup,
    setPageGroup,
  } = rest;

  const [buttons, setButtons] = useState([]);

  //pageGroup 상태가 pagenation 컴포넌트 안에 있었을때 원하는 결과가 나오지 않은 이유,,, 알아보기

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevGroup = () => {
    if (pageGroup > 1) {
      setPageGroup(pageGroup - 1);
      setCurrentPage((pageGroup - 1) * 5);
    }
  };

  const handleNextGroup = () => {
    if (pageGroup < Math.ceil(dataTotalPage / 5)) {
      setPageGroup(pageGroup + 1);
      setCurrentPage(pageGroup * 5 + 1);
    }
  };

  useEffect(() => {
    const startPage = (pageGroup - 1) * 5 + 1;
    const endPage = Math.min(pageGroup * 5, dataTotalPage);
    const newButtons = [];
    for (let i = startPage; i <= endPage; i++) {
      newButtons.push(i);
    }
    setButtons(newButtons);
  }, [pageGroup, dataTotalPage]);

  return (
    <S.PagenationWrapper>
      <button
        className="prevBtn"
        onClick={() => handlePrevGroup()}
        disabled={pageGroup === 1}
      >
        prev
      </button>

      {buttons.map((it, index) => {
        return (
          <S.PagenationItem
            active={it === currentPage ? "true" : "false"}
            key={index}
            onClick={() => handleClick(it)}
          >
            {it}
          </S.PagenationItem>
        );
      })}

      <button
        className="nextBtn"
        onClick={handleNextGroup}
        disabled={pageGroup === dataTotalPage || currentPage === dataTotalPage}
      >
        next
      </button>
    </S.PagenationWrapper>
  );
};

export default Pagenation;
