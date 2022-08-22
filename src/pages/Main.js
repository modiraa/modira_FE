import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import PostCollection from "../components/PostCollection";
import "../css(subin)/Main.css";
import PostCollectionStatus from "../components/PostCollectionStatus";
import MenuIconBunch from "../components/MenuIconBunch";
import LowerNavbar from "../components/LowerNavbar";




const Main = () => {
  const [postAll,setPostAll]=React.useState(null);
  const [postDutchPay,setPostDutchPay]=React.useState(null);
  const [postGoldenBell,setPostGoldenBell]=React.useState(null);
  // kakao/naver 인가 뽑아오기 (백엔드에 보낼 인가코드)
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // google인가 뽑아오기
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  console.log(accessToken);
  // const { data } = Api.post("oauth/google", { accessToken });

  // axios..?
  // React.useEffect()
  const loadpostAX=async()=>{
    await axios.get("http://3.34.129.164/api/post/list")
    .then((res) => {
        console.log(res); 
        if(res.data){
          setPostAll(res.data.postAll.content)
          setPostDutchPay(res.data.postDutchPay.content)
          setPostGoldenBell(res.data.postGoldenBell.content)
        }
      // console.log(postAll,postDutchPay,postGoldenBell)
        
        }).catch((err) => {
        console.log( err);
        })
  }
 useEffect(()=>{
  loadpostAX();
 },[])

  return (
    <div>
      <div className="wrap-main">
        <Navbar />
        <div className="main-explain">
          <div className="main-explain-button">
            <div>모디라 소개 바로가기</div>
          </div>
        </div>
        <div style={{ marginTop: "36px", marginLeft: "24px" }}>
          <PostCollection postAll={postAll}/>
        </div>
        <div style={{ marginTop: "11px" }}>
          <PostCollectionStatus titleCollection={"공짜밥! 골든벨 모임"}  postStatus={postGoldenBell}/>
        </div>
        <div
          style={{
            marginTop: "114px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MenuIconBunch />
        </div>

        <div className="main-minibanner"></div>

        <div style={{ marginTop: "59px" }}>
          <PostCollectionStatus titleCollection={"무조건 N빵 모임"} postStatus={postDutchPay}/>
        </div>
      </div>
      <div  style={{ height: "125px" }}>
      </div>
      <div className="main-wrap-lowernavbar">
        <LowerNavbar />
      </div>

    </div>
  );
};
export default Main;
