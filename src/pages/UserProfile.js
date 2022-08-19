import React from "react";
import LowerNavbar from "../components/LowerNavbar";
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
import testimg from "../image/11.jpg";
import styled from "styled-components";

const UserProfile = () => {
  return (
    <div className="wrap">
      <div className="chat-header-wrap">
        <div className="chat-header-icon" style={{ marginLeft: "28px" }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
          >
            arrow_back_ios
          </span>
        </div>
      </div>

      <div className="wrap-middle">
        <div className="user-wrap-countlike">
          <div className="arrow_box">
            <span className="material-symbols-outlined" style={{fontSize:"20px"}}>favorite</span>
            <span style={{fontSize:"25px",fontWeiht:"400px",marginLeft:"2px"}}>12</span>
          </div>
        </div>
        <img src={testimg} className="user-img" />
        <div className="user-nick">Lorem ipsum dolor</div>
        <div className="user-wrap-sexAndage">
          <div className="user-sexAndage">
            <div>여성</div>
          </div>
          <div className="user-sexAndage">
            <div>20대</div>
          </div>
        </div>
        <div className="user-wrap-like">
          <div className="user-like">
            <div className="user-like-text">+1 좋아요</div>
          </div>
          <div className="user-like">
            <div className="user-like-text">-1 싫어요</div>
          </div>
        </div>
      </div>
      <Wrapnev>
        <LowerNavbar />
      </Wrapnev>
    </div>
  );
};

export default UserProfile;


const Wrapnev=styled.div`
    width: 100%;
  
    @media screen and (min-height : 740px) {
  
   position: absolute;
    bottom: 125px;
}
`