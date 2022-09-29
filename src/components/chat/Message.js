import React from "react";
import "../../css(subin)/chat.css";
import { useNavigate } from "react-router-dom";

const Message = ({ messageData, sendNick, prevData }) => {
  const isMyMessage = sendNick === messageData.sender;
  const isSmaeSender =
    prevData?.type !== "ENTER" && prevData?.sender === messageData.sender;

  const navigate = useNavigate();

  //첫 입장
  if (messageData.type === "ENTER") {
    return (
      <div className="chat-message-enter">
        <span className="chat-message-enter-nick font-bold">
          {messageData.sender}
        </span>
        님이 입장하셨습니다
      </div>
    );
  }

  // 메시지 연속x
  if (messageData.type === "TALK" && !isSmaeSender && isMyMessage) {
    console.log("같은 사람 연속 x");
    return (
      <div className="chat-container-message-notsamemessage-mymessage">
        <img
          src={messageData.profileImage}
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          alt={""}
          onClick={() => {
            navigate("/userprofile", { state: messageData.senderId });
          }}
        ></img>

        <div>
          <div className="chat-sender-mymessage font-bold">
            {messageData.sender}
          </div>

          <div className="chat-message-wrap-text">
            <div className="chat-message-text">{messageData.message}</div>
          </div>
        </div>
      </div>
    );
  }
  if (messageData.type === "TALK" && !isSmaeSender && !isMyMessage) {
    return (
      <div className="chat-container-message-notsamemessage-notmymessage">
        <img
          src={messageData.profileImage}
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          alt={""}
          onClick={() => {
            navigate("/userprofile", { state: messageData.senderId });
          }}
        ></img>

        <div>
          <div className="chat-sender-notsamemessge-notmymessage font-bold">
            {messageData.sender}
          </div>

          <div className="chat-message-wrap-text-notsamemessge-notmymessage">
            <div className="chat-message-text-notsamemessge-notmymessage">
              {messageData.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 메시지 연속
  if (messageData.type === "TALK" && isSmaeSender && isMyMessage)
    return (
      <div className="chat-container-message-samemessage-mymessage">
        <div className="chat-message-wrap-serial-text">
          <div className="chat-message-text">{messageData.message}</div>
        </div>
      </div>
    );
  if (messageData.type === "TALK" && isSmaeSender && !isMyMessage)
    return (
      <div className="chat-container-message-samemessage-notmymessage">
        <div className="chat-message-wrap-serial-text-notmymessage">
          <div className="chat-message-text-serial-notmymessage">
            {messageData.message}
          </div>
        </div>
      </div>
    );
  // enter가 있다면?
};

export default React.memo(Message);
