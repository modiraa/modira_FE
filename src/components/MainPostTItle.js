import React from "react";
import styled from "styled-components";
import "../css(subin)/MainPostTItle.css";

const MainPostTItle = ({titleCollection}) => {
  return (
    <div className="posttitle-wrap">
      <span className="posttitle-status">{titleCollection}</span>
      <div className="posttitle-viewmore">더보기</div>
    </div>
  );
};

export default MainPostTItle;
