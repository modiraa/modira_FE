import React from "react";
import MyIcon from "../../element/MyIcon";
import "./PostNoComponent.css";

const PostNoComponent = () => {
  return (
    <div className="wrap-postnocomponent">
      <div className="posnocomponent-location-icon">
    
        <MyIcon iconName={"close"} sizePx={39}/>
      </div>

      <div className="posnocomponent-text">게시글 없음</div>
    </div>
  );
};

export default PostNoComponent;
