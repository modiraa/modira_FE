import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import PostCollection from "../components/PostCollection";
import "../css(subin)/Main.css";
import PostCollectionStatus from "../components/PostCollectionStatus";
import MenuIconBunch from "../components/MenuIconBunch";
import LowerNavbar from "../components/LowerNavbar";
import { useNavigate } from "react-router-dom";
import MainBanner from "../components/MainBanner";
import MiniBanner from "../components/MiniBanner";
import { useSelector } from "react-redux";

const Main = () => {
  const [postAll, setPostAll] = React.useState(null);
  const [postDutchPay, setPostDutchPay] = React.useState(null);
  const [postGoldenBell, setPostGoldenBell] = React.useState(null);
  
  const navigate = useNavigate();

  // kakao/naver 인가 뽑아오기 (백엔드에 보낼 인가코드)
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // google인가 뽑아오기
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");

  const Auth=sessionStorage.getItem("token")

  useEffect(() => {
    loadpostAX();
  }, []);




  const loadpostAX = async () => {
    await axios
      .get("http://3.34.197.6/api/post/list",   {
        headers: {
          Authorization: Auth
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setPostAll(res.data.postAll.content);
          setPostDutchPay(res.data.postDutchPay.content);
          setPostGoldenBell(res.data.postGoldenBell.content);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <div>
      <div className="wrap-main">
        <Navbar />
        <MainBanner />
        <div className="main-postcollection">
          <PostCollection postAll={postAll} />
        </div>
        <div className="main-postcollectionstatus-goldenbell">
          <PostCollectionStatus
            titleCollection={"골든벨 모임"}
            postStatus={postGoldenBell}
            morepostType={"골든벨"}
          />
        </div>

        <div className="main-minibanner">
          <MiniBanner />
        </div>

        <div className="main-postcollectionstsus-dutch">
          <PostCollectionStatus
            titleCollection={"N빵 모임"}
            postStatus={postDutchPay}
            morepostType={"n빵"}
          />
        </div>
        <div style={{ height: "125px" }}></div>
      </div>

      <div className="main-wrap-lowernavbar">
        <LowerNavbar locationIndicator={"main"} />
      </div>
    </div>
  );
};
export default Main;
