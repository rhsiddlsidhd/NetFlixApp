import React from "react";
import "./NotFoundpage.style.css";

export const NotFoundpage = (error) => {
  const imgPath = process.env.REACT_APP_IMAGE_PATH;
  console.log(error);
  return (
    <div className="container">
      <div className="notfoundpage_wrapper">
        <div className="error">
          <img
            src={`${imgPath}/error_image.png`}
            alt="이미지"
            className="error_icon"
          />
          <h2 className="error_message">{error && error.error.message}</h2>
        </div>
        <div className="error_text"></div>
      </div>
    </div>
  );
};

export default NotFoundpage;
