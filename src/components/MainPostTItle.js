import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../css(subin)/MainPostTItle.css";

const MainPostTItle = ({titleCollection,morepostType}) => {
  const navigate=useNavigate();

  console.log(morepostType)
  if(morepostType==="최근생성모임"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status">최근생성 모임 🔥</span>
        <div className="posttitle-viewmore" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }
  if(morepostType==="n빵"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status">다같이 내자! <span className="font-orange">N빵 모임</span> 🏃‍♀️🏃‍♂️ </span>
        <div className="posttitle-viewmore" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }
  if(morepostType==="골든벨"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status">방장이 쏜다! <span className="font-orange">골든벨 모임</span> 🥳 </span>
        <div className="posttitle-viewmore" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }

};

export default MainPostTItle;
