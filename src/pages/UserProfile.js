import React, { useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
import testimg from "../image/11.jpg";
import styled from "styled-components";
import axios from "axios";
import UserList from "../components/UserList";
import ProfileBg from "../components/ProfileBg";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [dataProfile, setDataProfile] = React.useState();
  const Auth = sessionStorage.getItem("token");
  const navigate=useNavigate();

  const showProfileAX = async () => {
    await axios
      .get(`http://3.34.129.164/api/user/info/9`)
      .then((response) => {
        console.log(response);
        setDataProfile(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    showProfileAX();
  }, []);

  const likePlusScore = async () => {
    const Auth = sessionStorage.getItem("token");

    await axios
      .post(
        "http://3.34.129.164/api/likes",
        { userId: 9 },
        {
          headers: {
            Authorization: Auth,
          },
        }
      )
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        window.location.reload();
        // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
        // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };

  const dislikePlusScore = async () => {
    const Auth = sessionStorage.getItem("token");

    await axios
      .post(
        "http://3.34.129.164/api/hates",
        { userId: 9 },
        {
          headers: {
            Authorization: Auth,
          },
        }
      )
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        window.location.reload();
        // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log(err.response);
        // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
  return (
    <div className="useprofile-wrap">
      <div className="userprofile-header-wrap">
        <div className="userprofile-header-icon" style={{ marginLeft: "28px" }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px",cursor:"pointer" }}
            onClick={()=>{navigate(-1)}}
          >
            arrow_back_ios
          </span>
        </div>
      </div>

      <div className="wrap-middle">
        <div className="user-wrap-countlike">
          <div className="arrow_box">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "16px",
                fontVariationSettings: "'FILL' 1",
                color: "#FFE9BE",
              }}
            >
              favorite
            </span>
            <span className="userprofile-like-text">{dataProfile?.score}</span>
          </div>
        </div>
        <div className="userprofile-background-img">
          <ProfileBg ProfileImg={dataProfile?.userProfile} />
        </div>

        <div className="user-nick">Lorem ipsum dolor</div>
        <div className="user-wrap-sexAndage">
          <div className="user-sexAndage">
            <div className="user-sexAndage-text">{dataProfile?.gender}</div>
          </div>
          <div className="user-sexAndage">
            <div className="user-sexAndage-text">{dataProfile?.age}</div>
          </div>
        </div>
        <div className="user-wrap-like">
          <div className="user-like"  onClick={dislikePlusScore}>
            <div className="user-like-text">
              -1 싫어요
            </div>
          </div>
          <div className="user-like" style={{backgroundColor:"#FFBB31"}} onClick={likePlusScore}>
            <div className="user-like-text" style={{color:"white"}}>
              +1 좋아요
            </div>
          </div>
        </div>
        <div className="user-wrap-userchange">
          <div className="user-userchange-title">
            모임원들이 평가를 기다리고 있어요!
          </div>
          <div className="user-wrap-userchange-userlist">
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
            <UserList />
          </div>
        </div>
      </div>

      <LowerNavbar />
    </div>
  );
};

export default UserProfile;
