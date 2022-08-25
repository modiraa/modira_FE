import '../css(subin)/MyInfo.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MyInfo = () => {

  const params = useParams();

  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    // axios 요청하기(axios의 response)
    axios.get(`http://3.39.23.189/api/user/info/1`)
      .then(response => {
        setInfoUser(response.data)
        console.log('api 호출 성공', params.id)
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
          <img src='https://cdn-icons-png.flaticon.com/512/14/14660.png?w=360' />
        </div>
        <div className='info_user_name'>
          <h3>김영희</h3>
        </div>
        <div className='info_user_address'>
          <span className="material-icons-outlined">
            place
          </span>
          <h5>서울시 논현동 000로 00-00</h5>
        </div>
        <div className='info_user_genderAge'>
          <div className='info_user_gender'>
            <h3>여성</h3>
          </div>
          <div className='info_user_age'>
            <h3>20대</h3>
          </div>
        </div>
        <div className='info_user_good'>
          <div className='myinfo-material-icons-outlined'>
            <span className="material-icons-outlined">
              favorite_border
            </span>
          </div>
          <span>12</span>
        </div>
        <div className='info_user_update_btn'>
          <button>프로필 수정</button>
        </div>
      </div>
    </div>
  )
}
export default MyInfo