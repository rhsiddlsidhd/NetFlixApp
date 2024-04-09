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
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: white;
  > img {
    width: 10rem;
    height: 100%;
    margin-right: 1rem;
  }
  .keyword_introduce {
    width: 80%;
    height: 65%;

    .genre {
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      > .badge {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    > div:last-child {
      padding-top: 0.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
`;
