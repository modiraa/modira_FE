import React from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../element/MyIcon";
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
            <span className="postcomponentstatus-resraint-text font-medium">
              #{poststatus.age}
            </span>
          </div>
          <div className="postcomponentstatus-resraint">
            <span className="postcomponentstatus-resraint-text font-medium">#{gender}</span>
          </div>
        </div>
      </div>
      <div className="postcomponentstatus-title font-bold">{title}</div>
      <div className="wrap-postcomponentstatus-dayAndperson">
        <div className="postcomponentstatus-location-icon">
   
          <MyIcon sizePx={14} iconName={"calendar_today"} color={"gray"} />
        
          <div className="postcomponentstatus-day">
            {poststatus.date + " " + poststatus.time}
          </div>
        </div>
        <div className="postcomponentstatus-location-icon-person">
    
        <MyIcon sizePx={14} iconName={"person"} color={"gray"} />

          <div className="postcomponentstatus-person">
            {poststatus?.numberOfParticipant}명 참여
          </div>
          <MyIcon sizePx={14} iconName={"ramen_dining"} color={"gray"} />

          <div className="postcomponentstatus-person">{menu}</div>
        </div>
      </div>
    </div>
  );
};

export default PostComponentStatus;
