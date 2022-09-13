import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdBanner = () => {
    const navigate=useNavigate();
  return (
    <div className="wrap-mainbanner">
    <div className="mainbanner-wrap-logoAndtext">
      <div className="mainbanner-logo"></div>
      <div className="mainbanner-text">
        이제 <span className="font-bold">혼밥</span>하지 마세요!
        <br /><span className="font-bold">밥 친구 찾기 플랫폼</span> <span  className="font-color font-black">modira</span>
      </div>
      <div
        className="mainbanner-link-text"
        onClick={() => navigate("/enter")}
      >
        모디라 소개 바로가기 {">"}
      </div>
    </div>
  </div>
  )
}

export default AdBanner