// import styled from "styled-components";
import React from "react";
import "../css(subin)/Navbar.css";
import axios from "axios";

const Navbar = () => {
  const [isOpenSearch, setIsOpenSearch] = React.useState(false);
  const refSearch=React.useRef();
  const [test,setTest]=React.useState("");

  const searchAddressAX=async()=>{
    
    await axios
    .get(`http://3.34.129.164/api/search/post?keyword=${test}&address=대구`)
    .then((response) => {
      console.log("성공", response);
    })
    .catch((error) => {
      console.log("에러", error);
    });
  }


  const showSearchBar = () => {
    setIsOpenSearch(true);
  };
  if (isOpenSearch) {
    return <div className="info_header">
      <div style={{width:"408px",height:"44px",}}>
<input onChange={()=>{setTest(refSearch.current.value)}} ref={refSearch}></input>
<button onClick={searchAddressAX}>제출</button>
      </div>
    </div>;
  } else {
    return (
      <div className="info_header">
        <div className="info_header_address">
          <span className="info-header-address-text">서울시 논현동</span>
          <div className="info_header_address_plus">
            <div className="location-trianle">
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
