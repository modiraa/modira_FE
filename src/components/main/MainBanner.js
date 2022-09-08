import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainBanner.css";
const MainBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="wrap-mainbanner">
      <div className="mainbanner-wrap-logoAndtext">
        <div className="mainbanner-logo"></div>
        <div className="mainbanner-text">
          이제 혼밥하지 마세요!
          <br />밥 친구 찾기 플랫폼 <span className="font-color">modira</span>
        </div>
        <div
          className="mainbanner-link-text"
          onClick={() => navigate("/enter")}
        >
          모디라 소개 바로가기 {">"}
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
