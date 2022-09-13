import React from "react";
import { useNavigate } from "react-router-dom";

const AdBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="wrap-mainbanner">
      <div className="mainbanner-wrap-logoAndtext">
        <div className="mainbanner-logo"></div>
        <div className="mainbanner-text">
          저희 서비스를 이용하고,
          <br />
          기프티콘 받아가세요!
        </div>
        <div
          className="mainbanner-link-text"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1QGXGDovAKZ2HNsCTHNUUwLdcPZqqTvCR4sjQ5mIHciI/edit",
              "_blank"
            )
          }
        >
          설문참여하기 {">"}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
