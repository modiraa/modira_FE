import React from "react";
import "./MiniBanner.css";

const MiniBanner = () => {
  return (
    <div className="wrap-minibanner">
      <div className="minibanner-text">
        모임 참여시 <span className="font-orange font-bold">범죄</span>에<br />
        노출되지 않도록 <span className="font-bold">주의하세요!</span>
      </div>
    </div>
  );
};

export default MiniBanner;
