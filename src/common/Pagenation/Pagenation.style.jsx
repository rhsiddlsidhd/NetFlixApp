import { styled } from "styled-components";

export const PagenationWrapper = styled.div`
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
    @media screen and (max-width: 767px) {
      margin: 0;
    }
  }
  > .prevBtn,
  .nextBtn {
    color: white;
    cursor: pointer;
  }
`;

export const PagenationItem = styled.button`
  color: ${(props) => (props.active === "true" ? "red" : "white")};
  font-weight: ${(props) => (props.active === "true" ? "bold" : "")};
`;
