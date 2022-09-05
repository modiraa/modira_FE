import React from "react";
import "../css(subin)/postseemorepost.css";
import {useNavigate} from"react-router-dom"

const PostSeeMorePost = ({morepostType}) => {
  const navigate=useNavigate();
  return (
    <div className="wrap-postseemorepost" onClick={()=>{navigate("/morepost",{state:morepostType})}}>
      <div className="postseemorepost-location-icon">
        <span className="material-symbols-outlined" style={{fontSize:"29px",color:"#FFBB31"}}>add</span>
      </div>

      <div className="postseemorepost-text">더보기</div>
    </div>
  );
};

export default PostSeeMorePost;
