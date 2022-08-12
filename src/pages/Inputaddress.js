import React, { useEffect } from "react";
import styled from "styled-components";
import DaumPostcodeEmbed from "react-daum-postcode";
import Mapgps from "../components/Mapgps";

const Inputaddress = () => {
  const handleComplete = (data) => {
    console.log(data);
  };

  var themeObj = {
    bgColor: "#935555", //바탕 배경색
    searchBgColor: "#7D4343", //검색창 배경색
    //contentBgColor: "", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    //pageBgColor: "", //페이지 배경색
    //textColor: "", //기본 글자색
    //queryTextColor: "", //검색창 글자색
    //postcodeTextColor: "", //우편번호 글자색
    //emphTextColor: "", //강조 글자색
    //outlineColor: "", //테두리
  };

  return (
    <div>
      {/* <DaumPostcodeEmbed
        onComplete={handleComplete}
        autoClose={false}
        theme={themeObj}
      /> */}
       <Mapgps/>
    </div>
   
  );
};

export default Inputaddress;
