import React from 'react'
import '../css(subin)/Write.css';

const WriteHeader = () => {
  return (
    <div>
      <div className='write_top'>
        <div className='write-close-btn'>
          <span className="material-icons">
            close
          </span>
        </div>
        <div className='write_top_title'>
          <h1>게시글 작성</h1>
        </div>
        <div className='send_btn'>
          <h1>완료</h1>
        </div>
      </div>
    </div>
  )
}

export default WriteHeader
