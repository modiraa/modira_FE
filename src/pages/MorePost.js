import React from 'react';
import '../css(subin)/MorePost.css';

const MorePost = () => {

  return (
    <div className="more-post">
      <div className="more-post-title">
        <h3>최근생성 모임</h3>
      </div>
      <div className="more-post-Contents">
        <div className="more-post-card">
          <div className="card-img">
            이미지
          </div>
          <div className="card-cartegory">
            <p>N빵 모임</p>
          </div>
          <div className="card-title">
            <p>같이 밥먹어요!</p>
          </div>
          <div className="card-date">
            <p>6월 9일</p>
          </div>
          <div className="card-people-count">
            <p>2명 참여</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default MorePost