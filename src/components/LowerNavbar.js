import React from "react";
import "../css(subin)/LowerNavbar.css";
import { useNavigate } from 'react-router-dom';

const LowerNavbar = () => {
    const navigate = useNavigate();

  return (
    <div
      style={{
        height: "125px",
        width: "525px",
        display: "flex",
        flexDirection:"row",
        backgroundColor:"white"
      
      }}
    >
     
     
     
      
      <div className="wrap-symbols-text" style={{width:"37px",height:"59px",marginLeft:"57px",marginTop:"24px"} } onClick={()=>navigate("/")}>
      <span className="material-symbols-outlined">home</span>
      <span className="symbols-text" style={{marginTop:"3px"}}>Home</span>
      </div>

      <div className="wrap-symbols-text"  style={{width:"29px",height:"48px",marginLeft:"97px",marginTop:"35px"}} onClick={()=>navigate("/chat")}>
      <span className="material-symbols-outlined">forum</span>
      <span className="symbols-text">Chat</span>
      </div>

      <div className="wrap-symbols-text" style={{width:"25px",height:"50px",marginLeft:"97px",marginTop:"33px"}} >
      <span className="material-icons-outlined"style={{  fontSize: "25px",}}>calendar_today</span>
      <span className="symbols-text">List</span>
      </div>

      <div className="wrap-symbols-text" style={{width:"25px",height:"50px",marginLeft:"98px",marginTop:"35px"}} onClick={()=>navigate("/myinfo")}>
      <span className="material-symbols-outlined">person</span>
      <span className="symbols-text">My</span>
      </div>
      
    </div>
  );
};

export default LowerNavbar;
