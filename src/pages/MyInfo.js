import '../css(subin)/MyInfo.css';

import React, { useState } from 'react';

const MyInfo = () => {

  const [infoUserName, setInfoUserName] = useState('');

  React.useEffect(()=>{

  },[])

  return (
    <div className='my_info'>
      <div className='info_wrap'>
        <div className='info_user_img'>
          <img src='https://cdn-icons-png.flaticon.com/512/14/14660.png?w=360'/>
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