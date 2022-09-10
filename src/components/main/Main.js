import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../public/Navbar";
import PostCollection from "./PostCollection";
import "../../css(subin)/Main.css";
import PostCollectionStatus from "./PostCollectionStatus";
import LowerNavbar from "../public/LowerNavbar";
import MainBanner from "./MainBanner";
import MiniBanner from "./MiniBanner";

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
          Authorization: Auth,
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
      <div className="lowernavbar">
        <LowerNavbar locationIndicator={"main"} />
      </div>
    </div>
  );
};
export default Main;
