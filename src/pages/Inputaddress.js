import React, { useEffect } from "react";
import styled from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";
import Mapgps from "../components/Mapgps";
import MapgpsForDetail from "../components/MapgpsForDetail";

import MyCalendar from "../components/MyCalendar";

import { useNavigate} from "react-router-dom";
import axios from "axios";


const Inputaddress = () => {
  const navigate = useNavigate();
  const handleComplete = (data) => {
    console.log(data);
    navigate('/FirstLogin',{state:{homesi: data.sido,homegu: data.sigungu}})
  };
  // 검색페이지 색상수정가능

  // var themeObj = {
  //   bgColor: "#935555", //바탕 배경색
  //   searchBgColor: "#7D4343", //검색창 배경색
  //   //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
  //   //pageBgColor: "", //페이지 배경색
  //   //textColor: "", //기본 글자색
  //   //queryTextColor: "", //검색창 글자색
  //   //postcodeTextColor: "", //우편번호 글자색
  //   //emphTextColor: "", //강조 글자색
  //   //outlineColor: "", //테두리
  // };
  const test=async()=>{
    await axios.get("http://3.34.129.164/api/post/list")
        .then((res) => {
            console.log(res); // 토큰이 넘어올 것임

            
            // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
            
            }).catch((err) => {
            console.log("소셜로그인 에러", err);
            // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
            })
  }

  return (
    <div>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        autoClose={false}

        // theme={themeObj}
      />
    <MyCalendar/>
    {/* <Mapgps></Mapgps> */}
{/* <MapgpsForDetail></MapgpsForDetail> */}
<button onClick={test}>통신하자</button>
    </div>
  );
};

export default Inputaddress;
