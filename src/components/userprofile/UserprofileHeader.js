import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyIcon from '../../element/MyIcon';
import axios from 'axios';

const UserprofileHeader = () => {
    const navigate=useNavigate();
    const Auth = sessionStorage.getItem("token");
    const roomId = sessionStorage.getItem("roomId");

    const exitPost = async (event) => {
        event.stopPropagation();
        await axios
          .post(`http://3.34.129.164/api/leave/${roomId}`, null, {
            headers: {
              Authorization: Auth,
            },
          })
          .then((res) => {
            console.log(res);
            sessionStorage.removeItem("rommId");
            alert("모임나가기가 완료되었습니다!");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div className="userprofile-header-wrap">
    <div
      className="userprofile-header-icon"
      style={{ marginLeft: "28px" }}
      onClick={(event) => {
        event.stopPropagation();
        navigate(-1);
      }}
    >
      <MyIcon sizePx={28} iconName={"arrow_back_ios"} cursor="pointer" />
    </div>
    <div onClick={exitPost} className="userprofile-header-btn">
      <div>모임 나가기</div>

    </div>
  </div>
  )
}

export default UserprofileHeader