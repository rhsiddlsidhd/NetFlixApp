import { styled } from "styled-components";

//불편 그자체 스크롤 없애고 히든

// 3줄 이상 그냥 . . .

export const KeyWordBoard = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KeyWordItem = styled.div`
  width: 70%;
  height: 12rem;
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
      cursor: pointer;
    }
  }
  > .keyword_introduce {
    width: calc(100% - 150px);
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      width: 100%;
      height: 30%;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
    .genre {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      > .badge {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    > div:last-child {
      height: 40%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 24rem;
    .keyword_introduce {
      margin-top: 1rem;
      width: 100%;

      .title {
        /* height: 20%; */
        height: fit-content;
      }
      .genre {
        height: fit-content;
        flex-wrap: wrap;
      }
      > div:last-child {
        height: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }
`;
