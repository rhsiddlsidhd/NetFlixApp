import { styled } from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 220px;
  height: 100%;
`;

export const MovieImage = styled.div`
  width: 220px;
  height: 340px;
  background-size: cover;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Ranking = styled.h5`
  background: linear-gradient(#000000, transparent);
  height: 20%;
  color: #ffffff9b;
  font-weight: bold;
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
  height: 100px;

  .title {
    width: 100%;
  }
`;
