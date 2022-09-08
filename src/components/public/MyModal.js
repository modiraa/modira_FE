import React from "react";
import ReactModal from "react-modal";
import "./MyModal.css";
import likeimg from"../../image/likeaandhate.png"

const MyModal = ({ isOpen, handleClickCancel }) => {
  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.79)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: " 12px 12px 0px 0px",
      outline: "none",
      padding: "0px",
      width: "525px",
      height: "376px",
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={style}>
      <div className="mymodal-close-icon">
        <span className="material-symbols-outlined" onClick={handleClickCancel} style={{fontSize:"23px"}}>
          close
        </span>
      </div>

      <div className="mymodal-firsttext">모임에서 만난 친구들은 어땠나요?</div>
      <div className="mymodal-picture-location">
        <img src={likeimg} className="mymodal-picture"></img>
      </div>

      <div className="mymodal-secondtext-location">
        <div className="mycodal-secondtext">다른 모임에 참여하기 전에</div>
        <div className="mycodal-secondtext" style={{marginTop:"3px"}}>프로필을 눌러 평가를 남겨주세요</div>
      </div>
    </ReactModal>
  );
};

export default MyModal;
