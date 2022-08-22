import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MyCalendar from '../components/MyCalendar';

const Main = () => {


    // kakao/naver 인가 뽑아오기 (백엔드에 보낼 인가코드) 
    let code = new URL(window.location.href).searchParams.get("code");
    console.log(code)

    // google인가 뽑아오기
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    console.log(accessToken)
    // const { data } = Api.post("oauth/google", { accessToken });

    // axios..?
    // React.useEffect()
    const test=async()=>{

 
      
    
    }


  return (
    <div className="main">
      <Navbar/>
      <p/>
      <MyCalendar/>
      <button > 아 여기를 안했구나</button>
    </div>
  )
}
export default Main