import React from 'react'
import { useNavigate } from 'react-router-dom';
import MyIcon from '../../element/MyIcon';

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
          <div className='card-date-icon'>
            <MyIcon iconName={"calendar_today"} sizePx={14} color={"gray"}/>
          </div>
          <p>{props.item?.date} {props.item?.time}</p>
        </div>
        <div className="card-people-count-menu">
          <div className='card-people-count-icon'>
            <MyIcon iconName={"person"} sizePx={14} color={"gray"}/>
          </div>
          <p>{props.item?.numberOfPeople}명 참여</p>
          <div className='card-menu-icon'>
            <MyIcon iconName={"ramen_dining"} sizePx={14} color={"gray"}/>
          </div>
          <p>{props.item?.menu}</p>
        </div>
      </div>
    </div>
  )
}

export default MorePostCard
