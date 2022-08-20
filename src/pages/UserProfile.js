import React from "react";
import LowerNavbar from "../components/LowerNavbar";
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
import testimg from "../image/11.jpg";
import styled from "styled-components";
import axios from "axios";

const UserProfile = () => {

  const likePlusScore= async()=>{
    await axios.post("http://3.39.23.189/api/likes/1",
    JSON.stringify({
      kakaoNickname : "user1"
  })
  )
    .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        
        // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        
        }).catch((err) => {
        console.log( err);
        // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
        })
  }

  const dislikePlusScore=async()=>{
    await axios.post("http://3.39.23.189/api/hates/1",
    JSON.stringify({
      kakaoNickname : "user1"
  })
  )
    .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        
        // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        
        }).catch((err) => {
        console.log( err);
        // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
        })
  }
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
            <div className="user-like-text" onClick={likePlusScore}>+1 좋아요</div>
          </div>
          <div className="user-like">
            <div className="user-like-text" onClick={dislikePlusScore}>-1 싫어요</div>
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