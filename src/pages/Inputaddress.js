import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyIcon from "../element/MyIcon";

const InputAddress = () => {
  const navigate = useNavigate();
  const lacation = useLocation();
  const handleComplete = (data) => {
    if (lacation.state === "mainaddress") {
      navigate("/morepost", {
        state: { address: data.sido + " " + data.sigungu },
      });
    } else {
      navigate("/Register", {
        state: { homesi: data.sido, homegu: data.sigungu },
      });
    }
  };

  return (
    <div>
      <Arrow
        onClick={() => {
          navigate("/register");
        }}
      >
        <MyIcon sizePx={25} iconName={"arrow_back_ios"} />
      </Arrow>
      <DaumPostcodeEmbed onComplete={handleComplete} autoClose={false} />
    </div>
  );
};

export default InputAddress;

const Arrow = styled.div`
  display: flex;
  margin-left: 1.375rem;
  cursor: pointer;
`;
