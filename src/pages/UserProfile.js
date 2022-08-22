import React, { useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
import testimg from "../image/11.jpg";
import styled from "styled-components";
import axios from "axios";

const UserProfile = () => {
  const [dataProfile ,setDataProfile]=React.useState();

  
const showProfileAX=async()=>{
  await axios.get(`http://52.79.223.9/api/user/info/88`)
      .then(response => {
       console.log(response)
       setDataProfile(response.data)
      })
      .catch(error => {
        console.log(error);
      })

}
  useEffect(() => {
   
    showProfileAX(); 
  }, [])

  const likePlusScore= async()=>{
    const Auth=sessionStorage.getItem("token")



    
    await axios.post("http://3.39.23.189/api/likes",JSON.stringify({userId:1},
    { headers: {
     Authorization: Auth
     }
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
    const Auth=sessionStorage.getItem("token")

    await axios.post("http://3.39.23.189/api/hates",
    JSON.stringify({userId:1}),
    { headers: {
     Authorization: Auth
      }
    }
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
    <div className="useprofile-wrap">
      <div className="userprofile-header-wrap">
        <div className="userprofile-header-icon" style={{ marginLeft: "28px" }}>
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
            <span style={{fontSize:"25px",fontWeight:"400",marginLeft:"2px"}}>{dataProfile?.score}</span>
          </div>
        </div>
        <img src={dataProfile?.userProfile} className="user-img" />
        <div className="user-nick">Lorem ipsum dolor</div>
        <div className="user-wrap-sexAndage">
          <div className="user-sexAndage">
            <div>{dataProfile?.gender}</div>
          </div>
          <div className="user-sexAndage">
            <div>{dataProfile?.age}</div>
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
    
        <LowerNavbar />
    
    </div>
  );
};

export default UserProfile;

