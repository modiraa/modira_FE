import React from "react";
import "../css(subin)/MenuIconBunch.css";

const MenuIconBunch = () => {
  return (
    <div className="wrap-menuiconbunch">
      <div className="menuiconbunch-wrap-iconAndtext">
        <div className="menuiconbunch-icon"></div>
        <div className="menuiconbunch-text">한 식</div>
      </div>
      <div className="menuiconbunch-wrap-iconAndtext">
        <div className="menuiconbunch-icon"></div>
        <div className="menuiconbunch-text">중 식</div>
      </div>
      <div className="menuiconbunch-wrap-iconAndtext">
        <div className="menuiconbunch-icon"></div>
        <div className="menuiconbunch-text">일 식</div>
      </div>
      <div className="menuiconbunch-wrap-iconAndtext">
        <div className="menuiconbunch-icon"></div>
        <div className="menuiconbunch-text">양 식</div>
      </div>
      <div className="menuiconbunch-wrap-iconAndtext">
        <div className="menuiconbunch-icon"></div>
        <div className="menuiconbunch-text">기 타</div>
      </div>
    </div>
  );
};

export default MenuIconBunch;
