import React, { useState } from "react";
import { styled } from "styled-components";

const Pagenation = ({ ...rest }) => {
  const { setCurrentPage, dataTotalPage, currentPage } = rest;

  const [pageGroup, setPageGroup] = useState(1);

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

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = (pageGroup - 1) * 5 + 1;
    const endPage = Math.min(pageGroup * 5, dataTotalPage);
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PagenationItem
          active={i === currentPage}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </PagenationItem>
      );
    }
    return buttons;
  };

  return (
    <PagenationWrapper>
      <button onClick={() => handlePrevGroup()} disabled={pageGroup === 1}>
        prev
      </button>
      {renderPageButtons()}
      <button onClick={handleNextGroup} disabled={pageGroup === dataTotalPage}>
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
`;

const PagenationItem = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? "red" : "white")};
`;
