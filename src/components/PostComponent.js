import React from "react";
import { useNavigate } from "react-router-dom";
import "../css(subin)/PostComponent.css";
const PostComponent = ({postAll}) => {
  const navigate=useNavigate();
  const refClick=React.useRef();

  
  function eventHandler(event) {
    console.log(event.type,"머가되지?")
    navigate(`/postdetail${postAll.postId}`)
  }
  React.useEffect(()=>{
    
   
     refClick.current.addEventListener('click',eventHandler )

    return()=>{
      refClick.current?.removeEventListener('click',eventHandler)
    }
    
  },[])
  var sectionStyle = {

    backgroundImage: "url(" +  postAll.menuForImage  + ")"
  };
  if(postAll){
    return (
      <div className="wrap-postcomponent" ref={refClick}>
        <div className="postcomponent-backimg"style={sectionStyle}>
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
            style={{ fontSize: "12px", color: "#9A9A9A" }}
          >
            calendar_today
          </span>
          <div className="postcomponent-day">{postAll.date}</div>
          <span
            className="material-icons-outlined"
            style={{ fontSize: "12px", color: "#9A9A9A" }}
          >
            person_outline
          </span>
          <div className="postcomponent-person">{postAll.numberOfParticipant}명 참여</div>
        </div>
      </div>
    );
  }else{
    return null;
  }
 
};

export default PostComponent;