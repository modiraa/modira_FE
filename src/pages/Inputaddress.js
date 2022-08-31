import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Inputaddress = () => {
  const navigate = useNavigate();
  const handleComplete = (data) => {
    console.log(data);
    navigate("/Register", {
      state: { homesi: data.sido, homegu: data.sigungu },
    });
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

  return (
    <div>
      <Arrow
        onClick={() => {
          navigate("/register");
        }}
        className="material-symbols-outlined"
      >
        arrow_back_ios
      </Arrow>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        autoClose={false}

        // theme={themeObj}
      />
    </div>
  );
};

export default Inputaddress;

const Arrow = styled.div`
  display: flex;
  margin-left: 22px;
  cursor: pointer;
`;