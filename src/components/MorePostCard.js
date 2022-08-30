import React from 'react'

const MorePostCard = () => {
  return (
    <div className="more-post-card">
          <div className="card-img">
            <div className='more-post-hashtag'>
              <div className="more-post-resraint">
                <span className="more-post-resraint-text"># 20 대</span>
              </div>
              <div className="more-post-resraint">
                <span className="more-post-resraint-text"># 여 성</span>
              </div>
            </div>
          </div>
          <div className="card-cartegory">
            <p>N빵 모임</p>
          </div>
          <div className="card-title">
            <p>같이 밥먹어요!</p>
          </div>
          <div className='card-date-count'>
            <div className="card-date">
              <span className="material-icons-outlined">
                calendar_today
              </span>
              <p>6월 9일</p>
            </div>
            <div className="card-people-count">
              <span className="material-icons-outlined">
                person_outline
              </span>
              <p>2명 참여</p>
            </div>
          </div>
        </div>
  )
}

export default MorePostCard
