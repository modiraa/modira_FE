import '../css(subin)/MyInfo.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const MyInfo = () => {

  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {

    const ACCESS_TOKEN = sessionStorage.getItem("token")
    console.log(ACCESS_TOKEN)
    // axios 요청하기(axios의 response)
    axios.get("http://3.34.129.164/api/user/info",
      {
        headers:
        {
          "Authorization": ACCESS_TOKEN
        },
      })
      .then(response => {
        setInfoUser(response.data)
        console.log('api 호출 성공')
      })
      .catch(error => {
        console.log(error);
      })
  }, []) // [] : 안에 있는 값이 바뀌면 다시 useEffect 작동
  console.log(infoUser);

  return (
    <div className='my_info'>
      <Navbar />
      <div className='info_wrap'>
        <div className='bg'></div>
        <div className='info_user_img'>
          <img src={infoUser.userProfile}/>
        </div>
        <div className='info_user_name'>
          <h3>{infoUser.nickname}</h3>
        </div>
        <div className='info_user_address'>
          <span className="material-icons-outlined">
            place
          </span>
          <h5>{infoUser.address}</h5>
        </div>
        <div className='info_user_genderAge'>
          <div className='info_user_gender'>
            <h3>{infoUser.gender}</h3>
          </div>
          <div className='info_user_age'>
            <h3>{infoUser.age}</h3>
          </div>
        </div>
        <div className='info_user_good'>
          <div className='myinfo-material-icons-outlined'>
            <span className="material-icons-outlined">
              favorite_border
            </span>
          </div>
          <span>{infoUser.score}</span>
        </div>
        <div className='info_user_update_btn'>
          <button>프로필 수정</button>
        </div>
      </div>
    </div>
  )
}
export default MyInfo