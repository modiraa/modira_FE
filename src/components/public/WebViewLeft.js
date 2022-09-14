import React from "react";
import { useNavigate } from "react-router-dom";

import "./webviewleft.css";
import"../../App.css"
import MyIcon from "../../element/MyIcon";

const WebViewLeft = () => {
  const refInputSearch = React.useRef();
  const navigate=useNavigate();
  const searchAddressAX =  () => {
    const keyword = refInputSearch.current.value;
    navigate("/morepost",{state:{keyword:keyword}})
    window.location.reload();

  };
  return (
    <div className="wrap-webview">
      <div className="webview-logo" onClick={()=>navigate("/")}></div>
      <div className="webview-description" >
        이제 <span className="font-bold">혼밥</span>하지 마세요!
        <br />
        <div className="font-bold">밥 친구 찾기 플랫폼 <span className="font-corlor-orange font-black">modira</span></div>
      </div>
      <div className="wrap-webview-search">
        <div className="wrap-webview-search-inputAndicon">
          <input
            className="webview-search"
            placeholder="어떤 모임을 찾으시나요?"
            ref={refInputSearch}
          ></input>
          <div className="webview-wrap-icon" onClick={searchAddressAX} style={{cursor:"pointer"}}>
            <MyIcon sizePx={28} iconName={"searchWhite"}   />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebViewLeft;
