// import styled from "styled-components";
import React from "react";
import "../css(subin)/Navbar.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  const refSearch = React.useRef();
  const [test, setTest] = React.useState("");
  const islogin = sessionStorage.getItem("token");
  const navigate = useNavigate();
 

  const searchAddressAX = async () => {

    await axios
      .get(`http://3.34.129.164/api/search/post?keyword=${test}`)
      .then((response) => {
        console.log("성공", response);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };

  const showSearchBar = () => {
    setIsOpenSearch(true);
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
            setTest(refSearch.current.value);
          }}
          ref={refSearch}
          placeholder="어떤 모임을 찾으시나요?"
        ></input>
        <div className="navbar-searchbar-location-icon">
          <div onClick={searchAddressAX}>
            <span className="material-symbols-outlined">search</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="info_header">
        <div className="info_header_address">
          <span className="info-header-address-text">서울시 논현동</span>
          <div className="info_header_address_plus">
            <div className="location-trianle" onClick={()=>navigate("/inputaddress",{state:"mainaddress"})}>
              <div className="triangle"></div>
            </div>
          </div>
        </div>
        <div className="info_header_search" onClick={showSearchBar}>
          <span className="material-icons-outlined">search</span>
        </div>
      </div>
    );
  }
};
export default Navbar;