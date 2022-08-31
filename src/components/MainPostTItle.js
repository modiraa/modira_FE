import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../css(subin)/MainPostTItle.css";

const MainPostTItle = ({titleCollection,morepostType}) => {
  const navigate=useNavigate();

  console.log(morepostType)
  return (
    <div className="posttitle-wrap">
      <span className="posttitle-status">{titleCollection}</span>
      <div className="posttitle-viewmore" onClick={()=>{navigate("/morepost",{state:morepostType})}}>더보기</div>
    </div>
  );
};

export default MainPostTItle;
