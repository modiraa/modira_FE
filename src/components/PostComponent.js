import React from "react";
import { useNavigate } from "react-router-dom";
import "../css(subin)/PostComponent.css";
import"../index.css"
const PostComponent = ({ postAll }) => {
  const navigate = useNavigate();
  const refClick = React.useRef();
  const Auth = sessionStorage.getItem("token");

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
              <span className="postcomponent-resraint-text">#20 대</span>
            </div>
            <div className="postcomponent-resraint">
              <span className="postcomponent-resraint-text">#여 성</span>
            </div>
          </div>
        </div>
        <div className="postcomponent-status">{postAll.category} 모임</div>
        <div className="postcomponent-title">{postAll.title}</div>
        <div className="wrap-postcomponent-dayAndperson">
          <div className="postcomponent-dayAndicon">
            <div className="postcomponent-location-icon">
              <span
                className="material-icons-outlined"
                style={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                calendar_today
              </span>
            </div>

            <div className="postcomponent-day">{postAll.date}</div>
          </div>
          <div className="postcomponent-personAndicon">
            <div className="postcomponent-location-icon">
              <span
                className="material-icons-outlined"
                style={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                person_outline
              </span>
            </div>
            <div className="postcomponent-person">
              {postAll.numberOfParticipant}명 참여
            </div>
            <div className="postcomponent-location-icon">
              <span
                className="material-icons-outlined"
                style={{ fontSize: "14px", color: "#9A9A9A" }}
              >
                ramen_dining
              </span>
            </div>
            <div className="postcomponent-person">
              {postAll.numberOfParticipant}명 참여
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default PostComponent;
