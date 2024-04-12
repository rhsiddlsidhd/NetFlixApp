import { styled } from "styled-components";

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 2000px; */
  height: 100vh;
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;
export const Backdrop = styled.div`
  height: 35vh;
  background-image: url(${(props) => props.$backdroppath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const Bottomlayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, black, transparent 90%);
`;

export const CenterContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Introduce = styled.div`
  width: 80%;
  height: 80%;

  @media screen and (max-width: 767px) {
    height: 75%;
  }
`;

export const MovieImgGuideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 70%;
  }
`;
export const MovieImg = styled.div`
  width: 300px;

  position: relative;

  @media screen and (max-width: 767px) {
    height: 50%;
    min-height: 200px;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -2rem;
  background: url(${(props) => props.$posterppath});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const MovieGuide = styled.div`
  width: 60%;
  margin-left: 1rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50%;

    margin-left: 0rem;
  }
`;

export const InfoTag = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;

  .info_title {
    display: flex;
    align-items: center;
    color: white;
    height: 40%;
    @media screen and (max-width: 767px) {
      /*  */
      margin-top: 1rem;
    }

    > div {
      display: flex;
      align-items: center;
      height: 100%;
      font-weight: bold;
      font-size: 1.5rem;
    }
    > .age {
      margin-left: 1rem;
    }
  }
  .info_tagline {
    font-size: 0.8rem;
    color: white;
    height: 35%;
  }
  @media screen and (max-width: 767px) {
    height: 55%;
  }
`;

export const InfoLike = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;

  > div {
    margin-right: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    /*  */
    margin-top: 2rem;
  }
`;

export const InfoEtcWrapper = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
`;

export const InfoEtc = styled.div`
  width: 400px;

  height: 100%;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 2rem;
    min-height: 150px;
    flex-direction: column;
  }
`;

export const InfoLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const InfoRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: white;

  .badge {
    display: flex;
    height: 100%;
    margin-right: 0.5rem;

    @media screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  }
  .badge_text {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 0.725rem;
  }
`;

export const MovieOverviewWrapper = styled.div`
  height: 40%;
  color: white;

  @media screen and (max-width: 767px) {
    height: 30%;
  }
`;

export const Review = styled.div`
  margin: 2rem;
  > h1 {
    color: white;
    margin-bottom: 2rem;
  }
`;
export const Recommendation = styled(Review)``;

export const ReviewBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const RecommendationBoard = styled(ReviewBoard)``;

export const Item = styled.div`
  width: 90%;
  height: 80%;
  border: 3px solid red;
  border-radius: 10px;
  margin-bottom: 2rem;
  > h1,
  div {
    color: white;
    margin: 1rem;
  }
`;

export const RecommendationItem = styled(Item)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TabBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  > button {
    border: none;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
      color: gray;
    }
  }
  .active {
    color: red;
  }
  @media screen and (max-width: 767px) {
    margin: 5rem;
  }
`;
export const ReviewsTab = styled.button``;
export const RecommendationTab = styled.button``;
