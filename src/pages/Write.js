import '../css(subin)/Write.css';

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import axios from "axios";

const Write = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const storeSelect = useSelector((state)=>state.SelectWrite)



  // 성별 체크박스 상태관리
  let [isGenderAction, setIsGenderAction] = useState(false);

  // 나이 체크박스 상태관리
  let [isAgeAction, setIsAgeAction] = useState(false);

  // 작성글 상태관리
  let [boardArray, setBoardArray] = useState({
    writeTitle: '',
    writeText: ''
  });

  const selectGenderAge = "모두가능";

  // 모임글 제목과 내용 값 저장하기
  const writeTitle_ref = React.useRef(null);
  const writeText_ref = React.useRef(null);

  const { writeTitle, writeText } = boardArray; // 비구조화 할당을 통해 e.target의 value값 추출
useEffect(()=>{
console.log(boardArray,"유즈effect")
console.log(storeSelect)
},[boardArray])
  
  useEffect(()=>{
    console.log("storage값 확인",storeSelect.writeText,storeSelect)
if(storeSelect.writeText!==""||storeSelect.writeTitle!==""){
  
  setBoardArray({...boardArray,writeText:storeSelect.writeText,writeTitle:storeSelect.writeTitle})
  console.log("여기옴?",{...boardArray,writeText:storeSelect.writeText,writeTitle:storeSelect.writeTitle})
}


},[])
  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    const dataTitleAndContent = {
      ...boardArray, // 기존의 inputValue 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    }

    setBoardArray(dataTitleAndContent)
    dispatch(selectWrite({ [name]: value } ))

    console.log(boardArray)
    console.log(name)
  }

  



  // 성별 체크박스 상태관리
  const genderChange = () => { // 입장조건 성별
    if (isGenderAction === false) {
      setIsGenderAction(!isGenderAction)
      navigate("/selectgender")
    }
    else if (isGenderAction === true) (
      setIsGenderAction(!isGenderAction)
    )
  }
  // console.log(isGenderAction);

  // 입장조건 나이 체크박스 상태관리
  const ageChange = () => { // 입장조건 나이
    if (isAgeAction === false) {
      setIsAgeAction(!isAgeAction)
      navigate("/selectage")
    }
    else if (isAgeAction === true) (
      setIsAgeAction(!isAgeAction)
    )
  }
  // console.log(isAgeAction);

  const clickSelect = () => {
    navigate("/selectdate")
  }

  // 등록완료 onClick때 보낼 값들
  const WriteSend = async () => {

    // input값들 유효성 검사!!
    // if (!writeTitle_ref.current.value) {
    //   alert('게시글 제목을 작성해주세요')
    // }
    // else if (!writeText_ref.current.value) {
    //   alert('게시글 내용을 작성해주세요')
    // }
    // else if (storeSelect.address === null) {
    //   alert('주소를 입력해주세요')
    // }
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
        "category": storeSelect.category,
        "title": writeTitle_ref.current.value,
        "contents": writeText_ref.current.value,
        "date": storeSelect.date,
        "time": storeSelect.time,
        "address": storeSelect.address,
        "latitude": storeSelect.latitude,
        "longitude": storeSelect.longitude,
        "numberOfPeople": +storeSelect.numberOfPeople[0],
        "menu": storeSelect.menu,
        "gender": storeSelect.gender,
        "age": storeSelect.age
      }),
      {
        headers: { "Content-Type": `application/json` },
      }
    )
      .then(response => {
        console.log(response)
        alert('게시글작성이 업로드 되었습니다')
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
              name="writeTitle" value={writeTitle} onChange={onChange} 
              />
          </div>
          <div className='write_text'>
            <textarea type="text" placeholder='게시글 내용을 작성해주세요.' ref={writeText_ref}
              name="writeText" value={writeText} onChange={onChange} />
          </div>
          <div onClick={clickSelect}>
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
                <span>{storeSelect.address}</span>
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
                <span>{storeSelect.date} {storeSelect.time}</span>
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
                <span>{storeSelect.numberOfPeople}</span>
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
                <span>{storeSelect.menu}</span>
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
                <span>{storeSelect.category}</span>
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
              checked={storeSelect.gender==""? false : true}
              onChange={genderChange}
            ></input>
            <h3>성 별</h3>
            <div className='gender_btn'><span>
              {storeSelect.gender == "" ?
                selectGenderAge
                :
                storeSelect.gender
              }
              </span>
            </div>
            
          </div>

          <div className='write_age'>
            <input type="checkbox"
              checked={storeSelect.age==""? false : true}
              onChange={ageChange}
            />
            <h3>나 이</h3>
            <div className='age_btn'>
            {storeSelect.age == "" ?
                selectGenderAge
                :
                storeSelect.age
              }
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
