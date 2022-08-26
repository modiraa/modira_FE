import '../css(subin)/Write.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import WriteHeader from '../components/WriteHeader';
import WriteMainSelect from '../components/WriteMainSelect';

const Write = () => {

  const navigate = useNavigate();

  const storeSelect = useSelector((state) => state.SelectWrite)

  // 성별 체크박스 상태관리
  let [isGenderAction, setIsGenderAction] = useState(false);

  // 나이 체크박스 상태관리
  let [isAgeAction, setIsAgeAction] = useState(false);

  const selectGenderAge = "모두가능";

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

  // 등록완료 onClick때 보낼 값들
  const WriteSend = async () => {

    // input값들 유효성 검사!!
    if (storeSelect.writeTitle == '') {
      alert('게시글 제목을 작성해주세요')
    }
    else if (storeSelect.writeText == '') {
      alert('게시글 내용을 작성해주세요')
    }
    else if (storeSelect.address == '') {
      alert('주소를 입력해주세요')
    }

    const ACCESS_TOKEN = sessionStorage.getItem("token")
    console.log(ACCESS_TOKEN)

    await axios.post("http://3.34.129.164/api/post",
      JSON.stringify({
        "category": storeSelect.category,
        "title": storeSelect.writeTitle,
        "contents": storeSelect.writeText,
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
        headers:
        {
          "Content-Type": `application/json`,
          "Authorization": ACCESS_TOKEN
        },
      }
    )
      .then(response => {
        console.log(response)
        alert('게시글작성이 업로드 되었습니다')
        navigate('/')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='write'>

      <WriteHeader />

      <WriteMainSelect />

      <div className='write_bottom'>
        <div className='write_condition'>
          <div className='write_condition_title'>
            <h3>입장 조건 설정</h3>
          </div>
          <div className='write_gender'>
            <input type="checkbox"
              checked={storeSelect.gender == '모두가능' ? false : true}
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
              checked={storeSelect.age == '모두가능' ? false : true}
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
