import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../css(subin)/MainPostTItle.css";

const MainPostTItle = ({titleCollection}) => {
  const navigate=useNavigate();
  return (
    <div className="posttitle-wrap">
      <span className="posttitle-status">{titleCollection}</span>
      <div className="posttitle-viewmore" onClick={()=>{navigate("/morepost")}}>더보기</div>
    </div>
  );
};

export default MainPostTItle;
