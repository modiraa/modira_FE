import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostComponentStatus.css";

const PostComponentStatus = ({ poststatus }) => {
  const refClick = React.useRef();
  const navigate = useNavigate();
  const Auth = sessionStorage.getItem("token");

  const menu = poststatus.menu.split("").join(" ");
  const gender =
    poststatus.gender === "모든성별"
      ? poststatus.gender
      : poststatus.gender.split("").join(" ");
  const title =
    poststatus.title.length > 16
      ? poststatus.title.substr(0, 16) + "..."
      : poststatus.title;

  function eventHandler(event) {
    console.log(event.type, "머가되지?");
    if (Auth) {
      navigate(`/postdetail${poststatus.postId}`);
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }
  React.useEffect(() => {
    refClick.current.addEventListener("click", eventHandler);

    return () => {
      refClick.current?.removeEventListener("click", eventHandler);
    };
  }, []);
  var sectionStyle = {
    backgroundImage: "url(" + poststatus.menuForImage + ")",
  };

  // console.log(poststatus)
  return (
    <div className="wrap-postcomponentstatus" ref={refClick}>
      <div className="postcomponentstatus-backimg" style={sectionStyle}>
        <div style={{ marginTop: "14px", marginLeft: "15px" }}>
          <div className="postcomponentstatus-resraint">
            <span className="postcomponentstatus-resraint-text">
              #{poststatus.age}
            </span>
          </div>
          <div className="postcomponentstatus-resraint">
            <span className="postcomponentstatus-resraint-text">#{gender}</span>
          </div>
        </div>
      </div>
      <div className="postcomponentstatus-title">{title}</div>
      <div className="wrap-postcomponentstatus-dayAndperson">
        <div className="postcomponentstatus-location-icon">
          <span
            className="material-icons-outlined"
            style={{ fontSize: "14px", color: "#9A9A9A" }}
          >
            calendar_today
          </span>

          <div className="postcomponentstatus-day">
            {poststatus.date + " " + poststatus.time}
          </div>
        </div>
        <div className="postcomponentstatus-location-icon-person">
          <span
            className="material-icons-outlined"
            style={{ fontSize: "14px", color: "#9A9A9A" }}
          >
            person_outline
          </span>

          <div className="postcomponentstatus-person">
            {poststatus?.numberOfParticipant}명 참여
          </div>
          <span
            className="material-icons-outlined"
            style={{ fontSize: "14px", color: "#9A9A9A" }}
          >
            ramen_dining
          </span>

          <div className="postcomponentstatus-person">{menu}</div>
        </div>
      </div>
    </div>
  );
};

export default PostComponentStatus;
