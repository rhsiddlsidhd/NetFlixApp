import { styled } from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    transform: translateY(10px);
    transition: 1s;
  }
  @media screen and (max-width: 767px) {
    max-height: 350px;
    border: 1px solid yellowgreen;
  }
`;

export const MovieImage = styled.div`
  height: 80%;
  background: url(${(props) => props.$moviePosterPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid red;
  @media screen and (max-width: 767px) {
  }
`;

export const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  background: linear-gradient(#000000, transparent);
  > div:last-child {
    //연령Badge
    margin-right: 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Ranking = styled.div`
  color: #ffffff9b;
  font-weight: bold;
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const OverlayTitle = styled.div``;
export const OverlayAverage = styled.div``;

export const MovieOverlay = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, black 80%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: end;
  opacity: 0;
  color: white;
  font-weight: bold;
  overflow-wrap: break-word;
  transition: all 1s;
  &:hover {
    opacity: 1;
  }
  ${OverlayAverage} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .progressbar_average {
      width: 50%;
    }
    .vote_average {
      width: 30%;
      text-align: center;
    }
    .vote_counter {
      width: 20%;
      color: #ffffff9b;
      font-size: 0.6725rem;
      text-align: center;
    }
  }
`;

export const Overview = styled.div`
  color: #ffffff9b;
  font-size: 0.75rem;
  text-align: center;
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const MovieIntroduction = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 767px) {
    height: 10%;
  }
`;
