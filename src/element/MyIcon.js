import React from "react";
import styled from "styled-components";
import { png } from "../image";

const MyIcon = ({ iconName, sizePx, color,cursor }) => {
  const mySrc = png.icon[iconName];
  const sizeToRem = sizePx / 16 + "rem";
  const myStyle = { width: sizeToRem, height: sizeToRem };
  if (color == "gray") {
    myStyle["filter"] =
      "invert(72%) sepia(15%) saturate(0%) hue-rotate(259deg) brightness(84%) contrast(87%)";
  }
  if(color=="beige"){
    myStyle["filter"]="invert(100%) sepia(78%) saturate(1059%) hue-rotate(308deg) brightness(102%) contrast(103%)"
  }
  if(cursor){
    myStyle["cursor"]="pointer";
  }
 

  return <img src={mySrc} style={myStyle}></img>;
};

export default MyIcon;
