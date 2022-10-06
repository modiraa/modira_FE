import React from "react";
import { png } from "../image";

const MyIcon = ({ iconName, sizePx, color, cursor }) => {
  const mySrc = png.icon[iconName];
  const sizeToRem = sizePx / 16 + "rem";
  const myStyle = { width: sizeToRem, height: sizeToRem };
  if (color == "gray") {
    myStyle["filter"] =
      "invert(72%) sepia(15%) saturate(0%) hue-rotate(259deg) brightness(84%) contrast(87%)";
  }
  if (color == "beige") {
    myStyle["filter"] =
      "invert(100%) sepia(78%) saturate(1059%) hue-rotate(308deg) brightness(102%) contrast(103%)";
  }

  if (color == "green") {
    myStyle["filter"] =
      "invert(71%) sepia(51%) saturate(551%) hue-rotate(83deg) brightness(96%) contrast(86%)";
  }
  if (color == "orange") {
    myStyle["filter"] =
      "invert(91%) sepia(14%) saturate(5454%) hue-rotate(331deg) brightness(102%) contrast(101%)";
  }
  if (color == "dropgray") {
    myStyle["filter"] =
      "invert(100%) sepia(0%) saturate(3910%) hue-rotate(303deg) brightness(107%) contrast(59%)";
  }
  if (color == "white") {
    myStyle["filter"] =
      "invert(100%) sepia(1%) saturate(0%) hue-rotate(123deg) brightness(102%) contrast(100%)";
  }
  if (cursor) {
    myStyle["cursor"] = "pointer";
  }

  return <img src={mySrc} style={myStyle}></img>;
};

export default React.memo(MyIcon);
