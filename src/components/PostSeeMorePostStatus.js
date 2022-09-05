import React from 'react'
import"../css(subin)/postseemorepoststatus.css"
import{useNavigate} from"react-router-dom"

const PostSeeMorePostStatus = ({morepostType}) => {
const navigate=useNavigate();
console.log(morepostType)
  return (
    <div className="wrap-postseemorepoststatus" onClick={()=>{navigate("/morepost",{state:morepostType})}}>
    <div className="postseemorepoststatus-location-icon">
      <span className="material-symbols-outlined" style={{fontSize:"39px",color:"#FFBB31"}}>add</span>
    </div>

    <div className="postseemorepoststatus-text">더보기</div>
  </div>
  )
}

export default PostSeeMorePostStatus