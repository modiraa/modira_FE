import React, { useEffect } from "react";
import axios from "axios";
//css
import "../../css(subin)/Main.css";
//compoonent
import Navbar from "../public/Navbar";
import PostCollection from "./PostCollection";
import PostCollectionStatus from "./PostCollectionStatus";
import LowerNavbar from "../public/LowerNavbar";
import MainBanner from "./MainBanner";
import AdBanner from "./AdBanner";

const Main = () => {
  const [postAll, setPostAll] = React.useState(null);
  const [postDutchPay, setPostDutchPay] = React.useState(null);
  const [postGoldenBell, setPostGoldenBell] = React.useState(null);


  // kakao/naver 인가 뽑아오기 (백엔드에 보낼 인가코드)
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  // google인가 뽑아오기
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");

  const Auth = sessionStorage.getItem("token");

  useEffect(() => {
    loadpostAX();
  }, []);

  const loadpostAX = async () => {
    await axios
      .get("http://3.34.129.164/api/post/list", {
        headers: {
          Authorization: null,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.postAll.content,typeof(res.data.postAll.content))
        if (res.data) {
          setPostAll(res.data.postAll.content);
          setPostDutchPay(res.data.postDutchPay.content);
          setPostGoldenBell(res.data.postGoldenBell.content);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
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
      <AdBanner/>
      </div>

      <div className="main-postcollectionstsus-dutch">
        <PostCollectionStatus
          titleCollection={"N빵 모임"}
          postStatus={postDutchPay}
          morepostType={"n빵"}
        />
      </div>
      <div>
      <div style={{height:"150px"}}></div>
      </div>
      
      <div className="lowernavbar">
        <LowerNavbar locationIndicator={"main"} />
      </div>
    </div>
  );
};
export default Main;
