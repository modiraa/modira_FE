import '../css(subin)/Write.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {

  const navigate = useNavigate();

  let [boardArray,setBoardArray] = useState({
    writeTitle: '',
    writeText: ''
  });

  // 모임글 제목과 내용 값 저장하기
  const writeTitle_ref = React.useRef(null);
  const writeText_ref = React.useRef(null);

  const {writeTitle, writeText} = boardArray; // 비구조화 할당을 통해 e.target의 value값 추출

  const onChange = e => {
    const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setBoardArray({
      ...boardArray, // 기존의 inputValue 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(boardArray)
  }

  // 체크박스 상태관리
  let [isGenderAction,setIsGenderAction] = useState(false);

  const genderChange = () => { // 입장조건 성별
    if(isGenderAction === false){
      setIsGenderAction(!isGenderAction)
      console.log('여성')
      // 백엔드에서 이 유저의 성별을 받아와야되나..?
    }
    else if(isGenderAction === true)(
      setIsGenderAction(!isGenderAction)
    )
  }

  console.log(isGenderAction);

  // 등록완료 onClick때 보낼 값들
  const WriteSend =()=>{
    console.log(boardArray)
    alert('전달완료')
    // 여기에 정보모아서 나중에 axios post로 data 보내기
  }

  return (
    <div className='write'>
      <div className='write_top'>
        <div className='close_btn'>
          <button>x</button>
        </div>
        <div className='write_title'>
          <h1>모임모집 글쓰기</h1>
        </div>
        <div className='send_btn'>
          <a href=''>완료</a>
        </div>
      </div>
      <div className='write_text'>

        <input type="text" placeholder='글 제목' ref={writeTitle_ref}
        name="writeTitle" value={writeTitle} onChange={onChange}/>

        <input type="text" placeholder='게시글 내용을 작성해주세요.' ref={writeText_ref}
        name="writeText" value={writeText} onChange={onChange}/>
        
      </div>
      <div className='write_address' onClick={()=>{navigate("/Inputaddress")}}>
        <p>주소를 입력해주세요</p>
      </div>
      <div className='write_select'>
        <div className='write_date'>
          <h3>일 정</h3>
          <select>
            <option>2022.8.10</option>
          </select>
        </div>
        <div className='write_date'>
          <h3>참여인원</h3>
          <select>
            <option>2명</option>
            <option>3명</option>
            <option>4명</option>
            <option>5명</option>
            <option>6명</option>
          </select>
        </div>
        <div className='write_menu'>
          <h3>메 뉴</h3>
          <select>
            <option>2명</option>
            <option>3명</option>
            <option>4명</option>
            <option>5명</option>
            <option>6명</option>
          </select>
        </div>
        <div className='write_meeting_type'>
          <h3>모임유형</h3>
          <select>
            <option>N빵</option>
            <option>골든벨</option>
          </select>
        </div>
      </div>
      <div className='write_condition'>
        <h3>입장 조건 설정</h3>
        <div className='write_gender'>
          <input type="checkbox"
            checked={isGenderAction}
            onChange={genderChange}
          ></input>
          <h3>성 별</h3>
          <div className='gender_btn'>
            여성
          </div>
        </div>
        <div className='write_age'>
          <input type="checkbox"/>
          <h3>나 이</h3>
          <div className='gender_btn'>
            <select>
              <option>20대</option>
              <option>30대</option>
              <option>40대</option>
              <option>50대</option>
              <option>60대</option>
              <option>70대</option>
            </select>
          </div>
        </div>
      </div>
      <div className='write_send_btn'>
        <button onClick={WriteSend}>등록완료</button>
      </div>
    </div>
  )
}
export default Write