import "../css(subin)/MyInfo.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import LowerNavbar from "../components/LowerNavbar";
import ProfileBg from "../components/ProfileBg";
import { useSelector } from "react-redux";

const MyInfo = () => {
  const [infoUser, setInfoUser] = useState({});

  const UserInfo = useSelector((state)=>state)

  console.log('유저인포',UserInfo);

  useEffect(() => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    console.log(ACCESS_TOKEN);
    // axios 요청하기(axios의 response)
    axios
      .get("http://3.34.129.164/api/user/info", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        setInfoUser(response.data);
        console.log("api 호출 성공");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // [] : 안에 있는 값이 바뀌면 다시 useEffect 작동
  console.log(infoUser.userProfile);

  return (
    <div className="my_info">
      <Navbar />
      <div className="info_wrap">
        {/* <div className="bg"></div> */}
        <div>
          <ProfileBg ProfileImg={infoUser.userProfile}/>
        </div>
        {/* <div className="info_user_img">
          <img src={infoUser.userProfile}/>
        </div> */}
        <div className="info_user_name">
          <h3>{infoUser.nickname}</h3>
        </div>
        <div className="info_user_address">
          <span className="material-icons-outlined">place</span>
          <h5>{infoUser.address}</h5>
        </div>
        <div className="info_user_genderAge">
          <div className="info_user_gender">
            <h3>{infoUser.gender}</h3>
          </div>
          <div className="info_user_age">
            <h3>{infoUser.age}</h3>
          </div>
        </div>
        <div className="info_user_good">
          <div className="info-user-countlike">
            <div className="info-arrow_box">
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
              <span className="info-like-text">{infoUser?.score}</span>
            </div>
          </div>
        </div>
        {/* <div className="info_user_update_btn">
          <button>프로필 수정</button>
        </div> */}
        <div className="myinfo-lowernavbar">
          <LowerNavbar locationIndicator={"myinfo"} />
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
