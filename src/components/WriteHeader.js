import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css(subin)/Write.css';

const WriteHeader = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='write_top'>
        <div className='write-close-btn'>
          <span className="material-icons" onClick={()=>{navigate("/")}}>
            close
          </span>
        </div>
        <div className='write_top_title'>
          <h1>게시글 작성</h1>
        </div>
      </div>
    </div>
  )
}

export default WriteHeader
