import Stomp from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import "../css(subin)/chat.css";
import MessagelList from "../components/MessagelList";
import UserProfile from "./UserProfile";
import MyCalendar from"../components/MyCalendar"

//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");
  const [enterChatRoom, setEnterChatRoom] = React.useState([]);
  const RefViewControll = React.useRef();

  React.useEffect(() => {
    // console.log(showMessage);
    //가장 최근 채팅 보여주기
    // console.log(enterChatRoom);
    if (RefViewControll.current) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [showMessage, enterChatRoom]);
  function connect() {
    var socket = new SockJS("http://52.79.223.9/ws/chat");
    stompClient = Stomp.over(socket);
    // stompClient.debug=null;
    stompClient.connect({}, connected);
  }
  function connected() {
    setIsConnected(true);
    stompClient.subscribe("/topic", subscribed);
  }
  function subscribed(greeting) {
    // console.log("여기안와?");
    const soketMessage = JSON.parse(greeting.body);
    // console.log("머야이거");
    // console.log(soketMessage.type)
    // enterChatRoom.push(soketMessage.message)
    // setEnterChatRoom([...enterChatRoom])
    // console.log(enterChatRoom)
    showMessage.push(soketMessage);
    setShowMessage([...showMessage]);

    // console.log("쇼메세지", showMessage, "저장할애", soketMessage);
  }

  function disconnect() {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setIsConnected(false);
    // console.log(stompClient !== null)
    // setEnterChatRoom(false);
    // console.log("Disconnected");
  }
  function sendNicknameFN() {
    try {
      stompClient.send(
        "/app/chat/message",
        {},
        JSON.stringify({
          // message: sendMessage,
          sender: sendNick,
          type: "ENTER",
          // roomId:"aa",
        })
      );
    } catch (error) {
      console.log(error);
    }
    setEnterChatRoom(true);
  }

  function sendMessageFN() {
    try {
      stompClient.send(
        "/app/chat/message",
        {},
        JSON.stringify({
          message: sendMessage,
          sender: sendNick,
          // type:"MESSAGE",
          // roomId:"aa",
        })
      );
    } catch (error) {
      console.log(error);
    }
    // 채팅을 보낸다.
  }


  return (
    <div className="chat-wrap">
      <div style={{position:"absolute",left:"50%",top:"50%"}}>
      <button onClick={connect}>연결!</button>
      <button onClick={disconnect}>소켓 연결 끊기!</button>
      <hr></hr>
      <input
        placeholder="nickname을 입력하세요"
        onChange={(e) => {
          setSendNick(e.target.value);
        }}
      ></input>
      <button onClick={sendNicknameFN}>닉네임등록</button>
      </div>
      
    
      <div className="chat-header-wrap">
        <div className="chat-header-icon" style={{ marginLeft: "28px" }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
          >
            arrow_back_ios
          </span>
        </div>
        <div className="chat-header-title">Lorem ipsum dolor...</div>{" "}
        <div className="chat-header-icon" style={{ marginRight: "35px" }}>
          <span className="material-icons-outlined" style={{ fontSize: "28px" }}>
            logout
          </span> 
        </div>
      </div>
      <div ref={RefViewControll} className="chat-message-container">
        <MessagelList showMessage={showMessage} sendNick={sendNick}/>
      </div>
      <div className="chat-input-wrap">
        <input className="chat-input"
          placeholder="채팅입력"
          onChange={(e) => {
            setSendMessage(e.target.value);
          }}
        />
        <button onClick={sendMessageFN}>메시지보내기</button>
      </div>
    </div>
  );
};
export default Chat;

const TitleRoom = styled.div`
  font-size: 24px;
`;


const WrapImgAndChat = styled.div`
  width: 100%;
`;
const WrapLeftChat = styled.div`
  display: flex;
  flex-direction: row !important;

  height: 50px;
`;
const WrapRightChat = styled.div`
  display: flex;
  flex-direction: row-reverse !important;

  height: 50px;
`;

const ContainerNickAndText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;


const TextMessage = styled.div`
  background-color: #565656;
  color: white;
`;


