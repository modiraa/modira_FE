import React from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../element/MyIcon";
import "./PostComponent.css";

const PostComponent = ({ postAll }) => {
  const navigate = useNavigate();
  const refClick = React.useRef();
  const Auth = sessionStorage.getItem("token");

  const menu = postAll.menu.split("").join(" ");
  const gender =
    postAll.gender === "모든성별"
      ? postAll.gender
      : postAll.gender.split("").join(" ");
  const title = postAll.title.length>=12?postAll.title.substr(0,12)+"...":postAll.title;

  function eventHandler(event) {
    console.log(event.type, "머가되지?");
    if (Auth) {
      navigate(`/postdetail${postAll.postId}`);
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
    backgroundImage: "url(" + postAll?.menuForImage + ")",
  };
  if (postAll) {
    return (
      <div className="wrap-postcomponent" ref={refClick}>
        <div className="postcomponent-backimg" style={sectionStyle}>
          <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <div className="postcomponent-resraint">
              <span className="postcomponent-resraint-text font-medium">
                #{postAll.age}
              </span>
            </div>
            <div className="postcomponent-resraint">
              <span className="postcomponent-resraint-text font-medium">#{gender}</span>
            </div>
          </div>
        </div>
        <div className="postcomponent-status font-medium">{postAll.category} 모임</div>
        <div className="postcomponent-title font-bold">{title}</div>
        <div className="wrap-postcomponent-dayAndperson">
          <div className="postcomponent-dayAndicon">
            <div className="postcomponent-location-icon">
            <MyIcon sizePx={14} iconName={"calendar_today"} color={"gray"} />
            
            </div>

            <div className="postcomponent-day">{postAll.date+" "+postAll.time}</div>
          </div>
          <div className="postcomponent-personAndicon">
            <div className="postcomponent-location-icon">
            <MyIcon sizePx={14} iconName={"person"} color={"gray"} />
            </div>
            <div className="postcomponent-person">
              {postAll.numberOfParticipant}명 참여
            </div>
            <div className="postcomponent-location-icon">
            <MyIcon sizePx={14} iconName={"ramen_dining"} color={"gray"} />
            </div>
            <div className="postcomponent-person">{menu}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PostComponent;
