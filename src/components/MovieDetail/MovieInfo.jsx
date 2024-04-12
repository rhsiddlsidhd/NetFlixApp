import React from "react";
import * as S from "./../../pages/MovieDetail/MovieDetail.style";
import Stack from "react-bootstrap/Stack";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const MovieInfo = ({ ...rest }) => {
  const {
    dataTextMap,
    etcBadge,
    genres,
    title,
    tagline,
    vote_average,
    popularity,
    adult,
  } = rest.value;
  return (
    <S.MovieGuide>
      <S.InfoTag>
        <Stack
          direction="horizontal"
          gap={2}
          style={{ width: "100%", flexWrap: "wrap", height: "25%" }}
        >
          {genres?.map((it, index) => {
            return (
              <Badge bg="danger" key={index}>
                {it.name}
              </Badge>
            );
          })}
        </Stack>
        <div className="info_title">
          <div>{title}</div>
          {adult ? (
            <Badge className="age" bg="danger">
              18 +
            </Badge>
          ) : (
            <Badge className="age" bg="primary">
              18 -{" "}
            </Badge>
          )}
        </div>
        <div className="info_tagline">{tagline}</div>
      </S.InfoTag>
      <S.InfoLike>
        <div>
          <div>
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          </div>
          <div style={{ color: "white", marginLeft: "0.5rem" }}>
            {vote_average.toFixed(1)}
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
          </div>
          <div style={{ color: "white", marginLeft: "0.5rem" }}>
            {popularity.toFixed(1)}
          </div>
        </div>
      </S.InfoLike>
      <S.InfoEtcWrapper>
        <S.InfoEtc>
          <S.InfoLeft>
            {etcBadge.map((it, index) => {
              if (index % 2 === 0) {
                return (
                  <S.InfoItem key={index}>
                    <Badge className="badge" bg="danger">
                      {it}
                    </Badge>
                    <div className="badge_text">{dataTextMap[it]}</div>
                  </S.InfoItem>
                );
              }
              return null;
            })}
          </S.InfoLeft>
          <S.InfoRight>
            {etcBadge.map((it, index) => {
              if (index % 2 !== 0) {
                return (
                  <S.InfoItem key={index}>
                    <Badge className="badge" bg="danger">
                      {it}
                    </Badge>
                    <div className="badge_text">{dataTextMap[it]}</div>
                  </S.InfoItem>
                );
              }
              return null;
            })}
          </S.InfoRight>
        </S.InfoEtc>
      </S.InfoEtcWrapper>
    </S.MovieGuide>
  );
};

export default MovieInfo;
