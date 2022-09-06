import React from 'react'
import { useNavigate } from 'react-router-dom';

const MorePostCard = (props) => {

  const refClick = React.useRef();
  const navigate = useNavigate();
  const Auth = sessionStorage.getItem("token")

  function eventHandler(event) {
    console.log(event.type, "머가되지?");
    if (Auth) {
      navigate(`/postdetail${props.item.postId}`);
    } else {
      alert("로그인이 필요합니다.")
      navigate("/login")
    }
  }

  React.useEffect(() => {
    refClick.current.addEventListener("click", eventHandler);

    return () => {
      refClick.current?.removeEventListener("click", eventHandler);
    };
  }, []);

  console.log(props.item)

  return (
    <div className="more-post-card" ref={refClick}>
      <div className='more-post-img-hashtag'>
        <div className='more-post-hashtag1'>
            <span className="more-post-resraint-text1"># {props.item?.age}</span>
        </div>
        <div className='more-post-hashtag2'>
        <span className="more-post-resraint-text2"># {props.item?.gender}</span>
        </div>
        <div className="card-img">
          <img src={props.item?.menuForImage} />
        </div>
      </div>
      <div className="card-cartegory">
        <p>{props.item?.category}</p>
      </div>
      <div className="card-title">
        <p>{props.item?.title}</p>
      </div>
      <div className='card-date-count-menu'>
        <div className="card-date">
          <span className="material-icons-outlined">
            calendar_today
          </span>
          <p>{props.item?.date}</p>
        </div>
        <div className="card-people-count-menu">
          <span className="material-icons-outlined">
            person_outline
          </span>
          <p>{props.item?.numberOfPeople}명 참여</p>
          <span className="material-icons-outlined">
            ramen_dining
          </span>
          <p>{props.item?.menu}</p>
        </div>
      </div>
    </div>
  )
}

export default MorePostCard
