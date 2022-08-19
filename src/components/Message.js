import React from "react";
import "../css(subin)/chat.css";
import testimg from "../image/11.jpg";
import styled from "styled-components";

const Message = ({ messageData, sendNick, prevData }) => {
  //   console.log(messageData, messageData.type==null);
  const isMyMessage = sendNick == messageData.sender;
  const isSmaeSender =
    prevData?.type !== "ENTER" && prevData?.sender == messageData.sender;

  console.log(messageData.sender, sendNick, isMyMessage, "여기확인");

  //첫 입장
  if (messageData.type == "ENTER") {
    return (
      <div className="chat-message-enter">
        <span className="chat-message-enter-nick">{messageData.sender}</span>
        님이 입장하셨습니다
      </div>
    );
  }
  // 메시지 연속x
  if (messageData.typ == null && !isSmaeSender)
    return (
      <WrapImgAndText isMyMessage={isMyMessage}>
        <img src={testimg} style={{ height: "48px", width: "48px",borderRadius:"8px" }}></img>

        <div>
         
          <ChatMessageNick isMyMessage={isMyMessage}>{messageData.sender}</ChatMessageNick>
         
         
          <div className="chat-message-wrap-text">
            <div className="chat-message-text">{messageData.message}</div>
          </div>
        </div>
      </WrapImgAndText>
    );

  // 메시지 연속
  if (messageData.typ == null && isSmaeSender)
    return (
      <SameMessage isMyMessage={isMyMessage}>
        <div className="chat-message-wrap-serial-text">
          <div className="chat-message-text">{messageData.message}</div>
        </div>
      </SameMessage>
    );
};

export default Message;

const WrapImgAndText = styled.div`
  display: flex;
  flex-direction: ${({ isMyMessage }) =>
    isMyMessage ? `row-reverse` : "row"} !important;
  margin-left: 43px;
  margin-right: 43px;
  margin-top: 44px;
 
`;
const ChatMessageNick=styled.div`
   margin-left: 23px;
    margin-right: 23px;
    font-size: 19px;
    font-weight: 500;
    text-align: ${({ isMyMessage }) =>
    isMyMessage ? `right` : "left"};

`

const SameMessage = styled.div`
  display: flex;
  flex-direction: ${({ isMyMessage }) =>
    isMyMessage ? `row-reverse` : "row"} !important;
`;
