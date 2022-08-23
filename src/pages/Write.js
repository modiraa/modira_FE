import '../css(subin)/Write.css';

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const Write = () => {

  const navigate = useNavigate();

  // mapgps에서 받아온 가게 주소
  let location = useLocation();

  // 사람수 셀렉
  const [selectCount, setSelectCount] = useState('');
  console.log(selectCount)

  // 메뉴 셀렉
  const [selectMenu, setSelectMenu] = useState('');
  console.log(selectMenu)

  // 모임유형 셀렉
  const [selectMeetingType, setSelectMeetingType] = useState('');
  console.log(selectMeetingType)

  // 성별 셀렉
  let [isGenderAction, setIsGenderAction] = useState(false);

  // 나이 셀렉
  const [selectAge, setSelectAge] = useState('');
  console.log(selectAge)

  // 나이 체크박스 상태관리
  let [isAgeAction, setIsAgeAction] = useState(false);

  // 작성글 상태관리
  let [boardArray, setBoardArray] = useState({
    writeTitle: '',
    writeText: ''
  });

  // 모임글 제목과 내용 값 저장하기
  const writeTitle_ref = React.useRef(null);
  const writeText_ref = React.useRef(null);

  const { writeTitle, writeText } = boardArray; // 비구조화 할당을 통해 e.target의 value값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setBoardArray({
      ...boardArray, // 기존의 inputValue 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
    console.log(boardArray)
  }

  // 성별 체크박스 상태관리
  const genderChange = () => { // 입장조건 성별
    if (isGenderAction === false) {
      setIsGenderAction(!isGenderAction)
      // 백엔드에서 이 유저의 성별을 받아와야되나..?
    }
    else if (isGenderAction === true) (
      setIsGenderAction(!isGenderAction)
    )
  }
  console.log(isGenderAction);

  // 입장조건 나이 체크박스 상태관리
  const ageChange = () => { // 입장조건 나이
    if (isAgeAction === false) {
      setIsAgeAction(!isAgeAction)
      // 백엔드에서 이 유저의 성별을 받아와야되나..?
    }
    else if (isAgeAction === true) (
      setIsAgeAction(!isAgeAction)
    )
  }
  console.log(isAgeAction);

  // 등록완료 onClick때 보낼 값들
  const WriteSend = async () => {

    // input값들 유효성 검사!!
    if (!writeTitle_ref.current.value) {
      alert('게시글 제목을 작성해주세요')
    }
    else if (!writeText_ref.current.value) {
      alert('게시글 내용을 작성해주세요')
    }
    else if (location.state === null) {
      alert('주소를 입력해주세요')
    }
    // 여기에 정보모아서 나중에 axios post로 data 보내기
    // console.log({
    //   "title" : writeTitle_ref.current.value,
    //   "contents" : writeText_ref.current.value,
    //   "address" : location.state.juso,
    //   "numberOfpeople" : selectCount,
    //   "menu" : selectMenu,
    //   "category" : selectMeetingType,
    //   "gender" : isGenderAction,
    //   "age" : selectAge
    // })

    // axios 연결 (JSON.stringify())
    //   await axios.post("http://3.34.129.164/api/post",
    //     JSON.stringify({
    //       "category": "n빵",
    //       "title": "안녕하세요",
    //       "contents": "왜안되죵..??",
    //       "date": "2022-08-15",
    //       "address": "대구",
    //       "numberOfPeople": Number(3),
    //       "menu": "일식",
    //       // "gender" : isGenderAction,
    //       "gender": "남성",
    //       "age": "40대"
    //     }),
    //     {
    //       headers: {"Content-Type": `application/json`},
    //     }
    //   )
    //     .then(response => {
    //       console.log(response)
    //       alert('보내기 성공!')
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
    // axios 연결 (JSON.stringify())
    await axios.post("http://3.34.129.164/api/post",
      JSON.stringify({
        "category": selectMeetingType,
        "title": writeTitle_ref.current.value,
        "contents": writeText_ref.current.value,
        "date": "2022-08-15",
        "address": location.state.juso,
        "numberOfPeople": Number(selectCount),
        "menu": selectMenu,
        // "gender" : isGenderAction,
        "gender": "남성",
        "age": selectAge
      }),
      {
        headers: { "Content-Type": `application/json` },
      }
    )
      .then(response => {
        console.log(response)
        alert('보내기 성공!')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='write'>
      <div className='write_top'>
        <div className='write-close-btn'>
          <span className="material-icons">
            close
          </span>
        </div>
        <div className='write_top_title'>
          <h1>게시글 작성</h1>
        </div>
        <div className='send_btn'>
          <h1>완료</h1>
        </div>
      </div>

      <div className='write-center'>
        <div className='write-select'>
          <div className='write_title'>
            <input type="text" placeholder='글 제목' ref={writeTitle_ref}
              name="writeTitle" value={writeTitle} onChange={onChange} />
          </div>
          <div className='write_text'>
            <textarea type="text" placeholder='게시글 내용을 작성해주세요.' ref={writeText_ref}
              name="writeText" value={writeText} onChange={onChange} />
          </div>
          <div>
          <div className='write_address'>
            <div className='write-address-title'>
              <h3>장 소</h3>
              <span className="material-icons-outlined">
                place
              </span>
            </div>
            <div className='write-address-text'>
              {/* uselocation초기값이 null 오류떠서 옵셔널 체이닝 걸었더니 해결.... */}
              {/* <span>{(location?.state?.juso)} </span> */}
              <span>서울특별시 마포구 땡땡로 00-0</span>
            </div>
          </div>

          <div className='write_date'>
            <div className='write-date-title'>
              <h3>일 정</h3>
                <span className="material-icons-outlined">
                  calendar_month
                </span>
            </div>
            <div className='write-date-text'>
              {/* uselocation초기값이 null 오류떠서 옵셔널 체이닝 걸었더니 해결.... */}
              {/* <span>{(location?.state?.juso)} </span> */}
              <span>2020/01/12</span>
            </div>
          </div>

          <div className='write_people_count'>
            <div className='write-people-count-title'>
              <h3>참여인원</h3>
                <span className="material-icons-outlined">
                  perm_identity
                </span>
            </div>
            <div className='write-people-count-text'>
              {/* uselocation초기값이 null 오류떠서 옵셔널 체이닝 걸었더니 해결.... */}
              {/* <span>{(location?.state?.juso)} </span> */}
              <span>2 명</span>
            </div>
          </div>

          <div className='write_menu'>
            <div className='write-menu-title'>
              <h3>메 뉴</h3>
                <span className="material-icons-outlined">
                  ramen_dining
                </span>
            </div>
            <div className='write-menu-text'>
              {/* uselocation초기값이 null 오류떠서 옵셔널 체이닝 걸었더니 해결.... */}
              {/* <span>{(location?.state?.juso)} </span> */}
              <span>중식</span>
            </div>
          </div>

          <div className='write_payment'>
            <div className='write-payment-title'>
              <h3>모임유형</h3>
              {/* <span className="material-icons-outlined">
                place
              </span> */}
            </div>
            <div className='write-payment-text'>
              {/* uselocation초기값이 null 오류떠서 옵셔널 체이닝 걸었더니 해결.... */}
              {/* <span>{(location?.state?.juso)} </span> */}
              <span>N빵 모임</span>
            </div>
          </div>
          </div>
          

        </div>
      </div>

      <div className='write_bottom'>
        <div className='write_condition'>
          <div className='write_condition_title'> 
            <h3>입장 조건 설정</h3>
          </div>
          <div className='write_gender'>
            <input type="checkbox"
              checked={isGenderAction}
              onChange={genderChange}
            ></input>
            <h3>성 별</h3>
            <div className='gender_btn'>
              모두가능
            </div>
          </div>

          <div className='write_age'>
            <input type="checkbox"
              checked={isAgeAction}
              onChange={ageChange}
            />
            <h3>나 이</h3>
            <div className='age_btn'>
              10대~20대
            </div>
          </div>
          <div className='write_send_btn'>
            <button onClick={WriteSend}>등록완료</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Write
