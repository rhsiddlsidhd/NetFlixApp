import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as S from "../../../pages/MovieDetail/MovieDetail.style";
import YouTube from "react-youtube";
import { useMoviePreviewQuery } from "../../../hooks/useMoviePreview";
import "./MoviePreview.style.css";

function MyVerticallyCenteredModal(props) {
  const { data } = useMoviePreviewQuery(props.id.id);

  const opts = {
    height: "500px",
    width: "100%",
  };
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          {data && data.results[0].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={data && data.results[0].key}
          opts={opts}
          onReady={onPlayerReady}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MoviePreview = (id) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <S.Preview>
        <h1>예고편 보기</h1>
        <S.PreviewBoard>
          <S.PreviewItem>
            <Button
              className="modal_button"
              variant="danger"
              onClick={() => setModalShow(true)}
            >
              Preview
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              id={id}
            />
          </S.PreviewItem>
        </S.PreviewBoard>
      </S.Preview>
    </>
  );
};

export default MoviePreview;
