import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

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
    if (pageGroup < dataTotalPage) {
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
    <PagenationWrapper>
      <button
        className="prevBtn"
        onClick={() => handlePrevGroup()}
        disabled={pageGroup === 1}
      >
        prev
      </button>

      {buttons.map((it, index) => {
        return (
          <PagenationItem
            active={it === currentPage ? "true" : "false"}
            key={index}
            onClick={() => handleClick(it)}
          >
            {it}
          </PagenationItem>
        );
      })}

      <button
        className="nextBtn"
        onClick={handleNextGroup}
        disabled={pageGroup === dataTotalPage}
      >
        next
      </button>
    </PagenationWrapper>
  );
};

export default Pagenation;

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;

  > button {
    border: none;
    background-color: transparent;
    margin: 1rem;
    &:hover {
      color: gray;
    }
  }
  > .prevBtn,
  .nextBtn {
    color: white;
    cursor: pointer;
  }
`;

const PagenationItem = styled.button`
  color: ${(props) => (props.active === "true" ? "red" : "white")};
  font-weight: ${(props) => (props.active === "true" ? "bold" : "")};
`;
