import React from "react";
import "./NotFoundpage.style.css";

const NotFoundpage = (error) => {
  const imgPath = process.env.REACT_APP_IMAGE_PATH;

  return (
    <div className="container">
      <div className="notfoundpage_wrapper">
        <div className="error">
          <img
            src={`${imgPath}/error_image.png`}
            alt="이미지"
            className="error_icon"
          />
          <h1 className="error_status">404</h1>
          <h2 className="error_message">page not found</h2>
        </div>
        <div className="error_text"></div>
      </div>
    </div>
  );
};

export default NotFoundpage;
