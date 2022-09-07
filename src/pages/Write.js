import '../css(subin)/Write.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import WriteHeader from '../components/WriteHeader';
import WriteMainSelect from '../components/WriteMainSelect';
import { selectWrite } from '../redux/moduls/SelectWrite';

const Write = () => {

  const navigate = useNavigate();

  const storeSelect = useSelector((state) => state.SelectWrite)

  console.log(storeSelect.gender,storeSelect.age)

  const dispatch = useDispatch();

  // 성별 체크박스 상태관리
  let [isGenderAction, setIsGenderAction] = useState(false);

  console.log(isGenderAction)

  // 나이 체크박스 상태관리
  let [isAgeAction, setIsAgeAction] = useState(false);

  const selectGender = "모든성별";
  const selectAge = "모든나이";

  // 성별 체크박스 상태관리
  const genderChange = () => { // 입장조건 성별
    if(storeSelect.gender==selectGender){
        setIsGenderAction(false)
        navigate('/selectgender')
    }
    if(storeSelect.gender=='여성'||storeSelect.gender=='남성'){
       setIsGenderAction(true)
       dispatch(selectWrite({gender:selectGender}))
    }
  }

  // 입장조건 나이 체크박스 상태관리
  const ageChange = () => { // 입장조건 나이
    if (storeSelect.age==selectAge) {
      setIsAgeAction(true)
      navigate("/selectage")
    }
    else if (storeSelect.age!==selectAge) {
      setIsAgeAction(false)
      dispatch(selectWrite({age:selectAge}))
    }
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
            <input type="checkbox" id='check-box-gender'
              checked={storeSelect.gender == '모든성별' ? false : true}
              onChange={genderChange}
            ></input>
            <div className='check-flex-gender'>
              <label className='check-gender' htmlFor='check-box-gender'>
                <div className='check-line-gender'></div>
                <h3>성 별</h3>
              </label>
              <div className='gender_btn'><span>
                {storeSelect.gender == "" ?
                  selectGender
                  :
                  storeSelect.gender
                }
              </span>
              </div>
            </div>
          </div>
          <div className='write_age'>
            <input type="checkbox" id='check-box-age'
              checked={storeSelect.age == '모든나이' ? false : true}
              onChange={ageChange}
            ></input>
            <div className='check-flex-age'>
              <label className='check-age' htmlFor='check-box-age'>
                <div className='check-line-age'></div>
                <h3>나 이</h3>
              </label>
              <div className='age_btn'><span>
                {storeSelect.age == "" ?
                  selectAge
                  :
                  storeSelect.age
                }
              </span>
              </div>
            </div>
          </div>
          <div className='write_send_btn'>
            <button onClick={WriteSend}>작성완료</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Write
