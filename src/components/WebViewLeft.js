import React from "react";
import styled from "styled-components";
import axios from "axios";
import "../css(subin)/webviewleft.css";
import"../App.css"
import { useNavigate } from "react-router-dom";

const WebViewLeft = () => {
  const refInputSearch = React.useRef();
  const navigate=useNavigate();
  const searchAddressAX = async () => {
    const keyword = refInputSearch.current.value;
    navigate("/morepost",{state:{keyword:keyword}})
    window.location.reload();
    // await axios
    //   .get(`http://3.34.129.164/api/search/post?keyword=${keyword}`)
    //   .then((response) => {
    //     console.log("성공", response);
    //   })
    //   .catch((error) => {
    //     console.log("에러", error);
    //   });
  };
  return (
    <div className="wrap-webview">
      <div className="webview-logo" onClick={()=>navigate("/")}></div>
      <div className="webview-description">
        이제 혼밥하지 마세요!
        <br />
        <div>밥친구 찾기 플렛폼 <span className="font-corlor-orange">modira</span></div>
      </div>
      <div className="wrap-webview-search">
        <div className="wrap-webview-search-inputAndicon">
          <input
            className="webview-search"
            placeholder="어떤 모임을 찾으시나요?"
            ref={refInputSearch}
          ></input>
          <div className="webview-wrap-icon">
            <span
              onClick={searchAddressAX}
              style={{ color: "white", fontSize: "37.41px",cursor:"pointer" }}
              className="material-symbols-outlined"
            >
              search
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebViewLeft;
