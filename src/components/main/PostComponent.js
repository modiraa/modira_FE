import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../element/MyIcon";
import "./PostComponent.css";
import minQuality from "../../image/소화질.png";

const PostComponent = ({ postAll }) => {
  const navigate = useNavigate();
  const refClick = React.useRef();
  const Auth = sessionStorage.getItem("token");
  const [imageIsReady, setImageIsReady] = React.useState(false);

  const menu = postAll.menu.split("").join(" ");
  const gender =
    postAll.gender === "모든성별"
      ? postAll.gender
      : postAll.gender.split("").join(" ");
  const title =
    postAll.title.length >= 12
      ? postAll.title.substr(0, 12) + "..."
      : postAll.title;

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

  useEffect(() => {
    const image = new Image();
    image.src = postAll?.menuForImage;
    image.onload = () => {
      setImageIsReady(true);
    };
  }, []);

  var onloadSectionStyle = {
    backgroundImage: "url(" + postAll?.menuForImage + ")" ,
  };
  var unloadSectionStyle={
    backgroundImage:"url(" + minQuality + ")"
  }
  
  if (postAll) {
    return (
      <div className="wrap-postcomponent" ref={refClick}>
        {imageIsReady ? (
          <div className="postcomponent-backimg" style={onloadSectionStyle}>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
              <div className="postcomponent-resraint">
                <span className="postcomponent-resraint-text font-medium">
                  #{postAll.age}
                </span>
              </div>
              <div className="postcomponent-resraint">
                <span className="postcomponent-resraint-text font-medium">
                  #{gender}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="postcomponent-backimg" style={unloadSectionStyle}>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
              <div className="postcomponent-resraint">
                <span className="postcomponent-resraint-text font-medium">
                  #{postAll.age}
                </span>
              </div>
              <div className="postcomponent-resraint">
                <span className="postcomponent-resraint-text font-medium">
                  #{gender}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="postcomponent-status font-medium">
          {postAll.category} 모임
        </div>
        <div className="postcomponent-title font-bold">{title}</div>
        <div className="wrap-postcomponent-dayAndperson">
          <div className="postcomponent-dayAndicon">
            <div className="postcomponent-location-icon">
              <MyIcon sizePx={14} iconName={"calendar_today"} color={"gray"} />
            </div>

            <div className="postcomponent-day">
              {postAll.date + " " + postAll.time}
            </div>
          </div>
          <div className="postcomponent-personAndicon">
            <div className="postcomponent-location-icon">
              <MyIcon sizePx={14} iconName={"person"} color={"gray"} />
            </div>
            <div className="postcomponent-person">
              {postAll.numberOfParticipant}/{postAll.numberOfPeople}명 참여
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
