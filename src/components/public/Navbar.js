// import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

import MyIcon from "../../element/MyIcon";

const Navbar = ({ address }) => {
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  const refSearch = React.useRef();
  const [keyword, setKeyword] = React.useState("");
  const [uesrInfo, setUserInfo] = React.useState(null);
  const Auth = sessionStorage.getItem("token");
  const islogin = Auth;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (address === undefined) {
      loadUserInfo();
    } else {
      setUserInfo({ address: address });
    }
  }, []);

  const loadUserInfo = async () => {
    axios
      .get("http://3.34.129.164/api/user/info", {
        headers: {
          Authorization: Auth,
        },
      })
      .then((response) => {
        console.log(response);
        setUserInfo(response.data);
        sessionStorage.setItem("roomId", response.data.roomId);
        sessionStorage.setItem("postTitle", response.data.isJoinPost);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchAddressAX = async () => {
    navigate("/morepost", { state: { keyword: keyword } });
    window.location.reload();
  };

  const showSearchBar = () => {
    setIsOpenSearch(true);
  };
  const changeAddress = () => {
    navigate("/inputaddress", { state: "mainaddress" });
  };

  if (!islogin) {
    return (
      <div className="info_header">
        <div style={{ width: "408px", height: "44px" }}>
          <div
            className="navbar-login-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            <div>로그인</div>
          </div>
        </div>
      </div>
    );
  }
  if (isOpenSearch) {
    return (
      <div className="wrap-navbar-searchbar">
        <input
          className="navbar-searchbar-input"
          onChange={() => {
            setKeyword(refSearch.current.value);
          }}
          ref={refSearch}
          placeholder="어떤 모임을 찾으시나요?"
        ></input>
        <div
          className="navbar-searchbar-location-icon"
          onClick={searchAddressAX}
        >
          <div>
            <MyIcon sizePx={17} iconName={"search"} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="info_header">
        <div className="info_header_address">
          <span className="info-header-address-text">{uesrInfo?.address}</span>
          <div className="info_header_address_plus" onClick={changeAddress}>
            <div className="location-trianle"></div>
          </div>
        </div>
        <div onClick={()=>{sessionStorage.clear();navigate("/")}} style={{cursor:"pointer"}}>로그아웃</div>
        <div className="info_header_search" onClick={showSearchBar}>
          <MyIcon sizePx={17} iconName={"search"} />
        </div>
      </div>
    );
  }
};
export default Navbar;
