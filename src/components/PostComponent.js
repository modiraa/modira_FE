import React from "react";
import "../css(subin)/PostComponent.css";
const PostComponent = ({postAll}) => {
  console.log(postAll)
  if(postAll){
    return (
      <div className="wrap-postcomponent">
        <div className="postcomponent-backimg">
          <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div className="postcomponent-resraint">
              <span className="postcomponent-resraint-text">#20 대</span>
            </div>
            <div className="postcomponent-resraint">
              <span className="postcomponent-resraint-text">#여 성</span>
            </div>
          </div>
        </div>
        <div className="postcomponent-status">{postAll.category}</div>
        <div className="postcomponent-title">{postAll.title}</div>
        <div className="wrap-postcomponent-dayAndperson">
          <span
            className="material-icons-outlined"
            style={{ fontSize: "9px", color: "#9A9A9A" }}
          >
            calendar_today
          </span>
          <div className="postcomponent-day">6월 9일</div>
          <span
            className="material-icons-outlined"
            style={{ fontSize: "9px", color: "#9A9A9A" }}
          >
            person_outline
          </span>
          <div className="postcomponent-person">{postAll.numberOfPeople}명 참여</div>
        </div>
      </div>
    );
  }else{
    return null;
  }
 
};

export default PostComponent;