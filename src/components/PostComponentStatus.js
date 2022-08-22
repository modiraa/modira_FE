import React from "react";
import "../css(subin)/PostComponentStatus.css";

const PostComponentStatus = ({poststatus}) => {
  // console.log(poststatus)
  return (
    <div className="wrap-postcomponentstatus">
      <div className="postcomponentstatus-backimg">
        <div style={{ marginTop: "14px", marginLeft: "15px" }}>
          <div className="postcomponentstatus-resraint">
            <span className="postcomponentstatus-resraint-text">#20 대</span>
          </div>
          <div className="postcomponentstatus-resraint">
            <span className="postcomponentstatus-resraint-text">#여 성</span>
          </div>
        </div>
      </div>
      <div className="postcomponentstatus-title">{poststatus.title}</div>
      <div className="wrap-postcomponentstatus-dayAndperson">
        <span
          className="material-icons-outlined"
          style={{ fontSize: "12px", color: "#9A9A9A" }}
        >
          calendar_today
        </span>
        <div className="postcomponentstatus-day">6월 9일</div>
        <span
          className="material-icons-outlined"
          style={{ fontSize: "12px", color: "#9A9A9A" }}
        >
          person_outline
        </span>
        <div className="postcomponentstatus-person">{poststatus.numberOfPeople}명 참여</div>
      </div>
    </div>
  );
};

export default PostComponentStatus;
