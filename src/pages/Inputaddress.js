import React, { useEffect } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LowerNavbar from "../components/LowerNavbar";

const Inputaddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location=useLocation();
  console.log(location)
  const handleComplete = (data) => {
    console.log(data);
    if(location.state){
      navigate("/morepost", {
        state: { homesi: data.sido, homegu: data.sigungu },
      });
    }else{
      navigate("/Register", {
        state: { homesi: data.sido, homegu: data.sigungu },
      });
    }
  
  };

  return (
    <div>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        autoClose={false}
      />
      <LowerNavbar />
    </div>
  );
};

export default Inputaddress;
