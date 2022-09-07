import React from "react";
import "../css(subin)/PostNoComponent.css";

const PostNoComponent = () => {
  return (
    <div className="wrap-postnocomponent">
      <div className="posnocomponent-location-icon">
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "39px", color: "white" }}
        >
          close
        </span>
      </div>

      <div className="posnocomponent-text">게시글 없음</div>
    </div>
  );
};

export default PostNoComponent;
