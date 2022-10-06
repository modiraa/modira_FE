import React from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../element/MyIcon";

const Header = () => {
  const navigate = useNavigate();
  const exitChatRoom = (event) => {
    event.stopPropagation();
    navigate("/userprofile");
  };
  const postTitle = sessionStorage.getItem("postTitle");
  return (
    <div className="chat-header-wrap">
      <div
        className="chat-header-icon"
        onClick={(event) => {
          event.stopPropagation();
          navigate(-1);
        }}
      >
        <MyIcon sizePx={28} iconName={"arrow_back_ios"} />
      </div>
      <div className="chat-header-title font-bold">{postTitle}</div>{" "}
      <div
        className="chat-header-icon"
        style={{ marginRight: "35px", cursor: "pointer" }}
        onClick={exitChatRoom}
      >
        <MyIcon sizePx={28} iconName={"logout"} />
      </div>
    </div>
  );
};

export  const MemorizedHeader=React.memo(Header);
