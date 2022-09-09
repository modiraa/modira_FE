import React from 'react'
import"./PostNoComponentStatus.css"

const PostNoComponentStatus = () => {
  return (
    <div className="wrap-postnocomponentstatus">
      <div className="postnocomponentstatus-location-icon">
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "39px", color: "white" }}
        >
          close
        </span>
      </div>

      <div className="postnocomponentstatus-text">게시글 없음</div>
    </div>
  )
}

export default PostNoComponentStatus