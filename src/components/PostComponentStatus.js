import React from "react";
import "../css(subin)/PostComponentStatus.css";

const PostComponentStatus = ({poststatus}) => {
  var sectionStyle = {

    backgroundImage: "url(" +  poststatus.menuForImage  + ")"
  };
  // console.log(poststatus)
  return (
    <div className="wrap-postcomponentstatus">
      <div className="postcomponentstatus-backimg" style={sectionStyle}>
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
          style={{ fontSize: "14px", color: "#9A9A9A" }}
        >
          calendar_today
        </span>
        <div className="postcomponentstatus-day">{poststatus.date}</div>
        <span
          className="material-icons-outlined"
          style={{ fontSize: "14px", color: "#9A9A9A" }}
        >
          person_outline
        </span>
        <div className="postcomponentstatus-person">{poststatus?.numberOfParticipant}명 참여</div>
      </div>
    </div>
  );
};

export default PostComponentStatus;
