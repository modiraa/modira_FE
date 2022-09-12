import React from "react";
import MyIcon from "../../element/MyIcon";
import "./PostNoComponentStatus.css";

const PostNoComponentStatus = () => {
  return (
    <div className="wrap-postnocomponentstatus">
      <div className="postnocomponentstatus-location-icon">
        <MyIcon sizePx={39} iconName={"close"} />
      </div>

      <div className="postnocomponentstatus-text">게시글 없음</div>
    </div>
  );
};

export default PostNoComponentStatus;
