import React, { useEffect } from "react";
import apiInstance from "../../utils/api";
import { Container } from "../../components/Container/Container";
import Banner from "./Banner/Banner";
const Homepage = () => {
  /**
   * 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
   * popular movie
   * top rated movie
   * upcoming movie
   */

  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Homepage;
