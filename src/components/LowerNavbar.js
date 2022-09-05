import React from "react";
import "../css(subin)/LowerNavbar.css";
import { useNavigate } from "react-router-dom";

const LowerNavbar = ({ locationIndicator }) => {
  const navigate = useNavigate();
  const Auth=sessionStorage.getItem("token")
  const goPage=(rourterAddress)=>{
    if(Auth){
      navigate(`/${rourterAddress}`)
    }else{
      alert("로그인이 필요합니다!")
      navigate("/login")
    }   
  }

  return (
    <div className="wrap-lowernavbar">
      <div
        className="wrap-symbols-text"
        style={{ marginLeft: "24px" }}
        onClick={() => navigate("/")}
      >
        <div className="lowernavbar-location-symbol">
          <div className="lowernavbar-center">
            {locationIndicator == "main" && (
              <div className="lowernavbar-indicator-circle"></div>
            )}
          </div>

          <span className="material-symbols-outlined">home</span>
        </div>

        <div>
          <span className="symbols-text" style={{ marginTop: "3px" }}>
            홈
          </span>
        </div>
      </div>

      <div className="wrap-symbols-text" onClick={()=>{goPage("chat")}}>
        <div className="lowernavbar-location-symbol">
          <div className="lowernavbar-center">
          {locationIndicator=="chat"&&<div className="lowernavbar-indicator-circle"></div>}
          </div>
          <span className="material-symbols-outlined">sms</span>
        </div>
        <span className="symbols-text">채 팅</span>
      </div>
      <div className="wrap-symbols-text"  onClick={()=>{goPage("write")}}>
        <div className="lowernavbar-location-symbol">
          <div className="lowernavbar-center">
          {locationIndicator=="write"&&<div className="lowernavbar-indicator-circle"></div>}
          </div>
          <span className="material-symbols-outlined">add_location</span>
        </div>
        <div>
          <span className="symbols-text">글 작성</span>
        </div>
      </div>

      <div className="wrap-symbols-text" onClick={()=>{goPage("myroom")}}>
        <div className="lowernavbar-location-symbol">
          <div className="lowernavbar-center">
          {locationIndicator=="myroom"&&<div className="lowernavbar-indicator-circle"></div>}
          </div>
          <span className="material-symbols-outlined">calendar_today</span>
        </div>
        <span className="symbols-text">내 모임</span>
      </div>

      <div className="wrap-symbols-text" onClick={()=>{goPage("myinfo")}}>
        <div className="lowernavbar-location-symbol">
          <div className="lowernavbar-center">
          {locationIndicator=="myinfo"&&<div className="lowernavbar-indicator-circle"></div>}
          </div>
          <span className="material-symbols-outlined">person</span>
        </div>
        <span className="symbols-text">마이페이지</span>
      </div>
    </div>
  );
};

export default LowerNavbar;
