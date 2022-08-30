import React from 'react'

const MorePostCard = (props) => {
  return (
    <div className="more-post-card">
          <div className="card-img">
            <div className='more-post-hashtag'>
              <div className="more-post-resraint">
                <span className="more-post-resraint-text"># 20 대</span>
              </div>
              <div className="more-post-resraint">
                <span className="more-post-resraint-text"># {props.item?.gender}</span>
              </div>
            </div>
          </div>
          <div className="card-cartegory">
            <p>{props.item?.category}</p>
          </div>
          <div className="card-title">
            <p>{props.item?.title}</p>
          </div>
          <div className='card-date-count'>
            <div className="card-date">
              <span className="material-icons-outlined">
                calendar_today
              </span>
              <p>{props.item?.date}</p>
            </div>
            <div className="card-people-count">
              <span className="material-icons-outlined">
                person_outline
              </span>
              <p>{props.item?.numberOfPeople}명 참여</p>
            </div>
          </div>
        </div>
  )
}

export default MorePostCard