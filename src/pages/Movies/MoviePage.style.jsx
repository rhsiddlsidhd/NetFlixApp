import { styled } from "styled-components";

export const KeyWordBoard = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeyWordItem = styled.div`
  width: 80%;
  height: 12rem;
  /* height: fit-content; */
  display: flex;
  margin-bottom: 3rem;
  color: white;
  border-bottom: 1px solid gray;

  > .img_wrapper {
    min-width: 150px;
    height: 100%;

    > img {
      height: 100%;
      border: 5px solid white;
    }
  }
  > .keyword_introduce {
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      font-weight: bold;

      flex: 2;
    }
    .genre {
      width: 100%;

      flex: 3;

      > .badge {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    > div:last-child {
      flex: 5;
    }
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 24rem;
    .keyword_introduce {
      margin-top: 1rem;
      width: 100%;

      .title {
        flex: 1;
      }
      .genre {
        flex: 1;
      }
      > div:last-child {
        flex: 8;
      }
    }
  }
`;
