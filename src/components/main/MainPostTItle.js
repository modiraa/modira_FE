import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPostTItle.css";

const MainPostTItle = ({titleCollection,morepostType}) => {
  const navigate=useNavigate();

  console.log(morepostType)
  if(morepostType==="최근생성모임"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status font-bold">최근생성 모임 🔥</span>
        <div className="posttitle-viewmore font-regural" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }
  if(morepostType==="n빵"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status font-bold">다같이 내자! <span className="font-orange font-black">N빵 모임</span> 🏃‍♀️🏃‍♂️ </span>
        <div className="posttitle-viewmore font-regural" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }
  if(morepostType==="골든벨"){
    return (
      <div className="posttitle-wrap">
        <span className="posttitle-status font-bold">방장이 쏜다! <span className="font-orange font-black">골든벨 모임</span> 🥳 </span>
        <div className="posttitle-viewmore font-regural" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
      </div>
    );
  }

};

export default MainPostTItle;
