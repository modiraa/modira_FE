import Stomp,{connect} from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import "../css(subin)/chat.css";
import MessagelList from "../components/MessagelList";
import UserProfile from "./UserProfile";
import MyCalendar from"../components/MyCalendar"
import MessageInput from "../components/MessageInput";
import MyModal from "../components/MyModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");
  const [enterChatRoom, setEnterChatRoom] = React.useState([]);
  const [modalIsopen,setmodalIsopen]=React.useState(false);
  const [postId,setPostId]=React.useState("");
  const [chatRoomId,setChatRoomId]=React.useState("");
  const RefViewControll = React.useRef();
 const navigate=useNavigate();

 React.useEffect(()=>{
  var socket = new SockJS("http://52.79.223.9/ws-stomp");
  stompClient = Stomp.over(socket);
  // stompClient.debug=null;
  stompClient.connect({}, connected);

 },[])
  React.useEffect(() => {
    console.log(showMessage)
  
    //가장 최근 채팅 보여주기
    if (RefViewControll.current) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [showMessage, enterChatRoom,sendMessage,chatRoomId]);

  const modalHandler=()=>{
    setmodalIsopen(true);
  }
  const handleClickCancel = () => {
    setmodalIsopen(false)
  };


  function connected() {
    setIsConnected(true);
    console.log(chatRoomId)
    if(chatRoomId){
      stompClient.subscribe(`/sub/chat/room/93c90c09-d882-4dcb-aa77-507478dbb8eb`, subscribed);
    }
    
  }
  //
  function subscribed(greeting) {
    console.log("여기올텐데")
    const soketMessage = JSON.parse(greeting.body);
    showMessage.push(soketMessage);
    setShowMessage([...showMessage]);
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
      console.log(chatRoomId)
      stompClient.send(
        "/pub/chat/message",
        {},
        JSON.stringify({
          // message: sendMessage,
          sender: sendNick,
          type: "ENTER",
          roomId:"93c90c09-d882-4dcb-aa77-507478dbb8eb",
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
        "/pub/chat/message",
        {},
        JSON.stringify({
          message: sendMessage,
          sender: sendNick,
          type:"TALK",
          roomId:"93c90c09-d882-4dcb-aa77-507478dbb8eb",
        })
      );
    } catch (error) {
      console.log(error);
    }
    // 채팅을 보낸다.
  }
  const makeChatRoom=async()=>{
    const params = new URLSearchParams();
    params.append('name', '11');

    await axios
    .post(`http://52.79.223.9/chat/room`,params)
    .then((response) => {
      console.log("성공", response);
      setChatRoomId(response.data.roomId)
      console.log(response.data.roomId)
      console.log(chatRoomId)
    })
    .catch((error) => {
      console.log("에러", error);
    });
  }


  return (
    <div className="chat-wrap">
      <div style={{position:"absolute",right:"349px",top:"70px"}}>
      {/* <button onClick={disconnect}>소켓 연결 끊기!</button> */}
      <button onClick={makeChatRoom}>채팅방생성</button>
      {/* <hr></hr> */}
      {/* <input  placeholder="chaatroom을 입력하세요" onChange={(e) => {
          setPostId(e.target.value);
        }}></input> */}
      <input
        placeholder="nickname을 입력하세요"
        onChange={(e) => {
          setSendNick(e.target.value);
        }}
      ></input>
      <button onClick={sendNicknameFN}>닉네임등록</button>
      </div>
      
    
      <div className="chat-header-wrap">
        <div className="chat-header-icon" style={{ marginLeft: "28px" }} onClick={()=>{navigate("/")}}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
          >
            arrow_back_ios
          </span>
        </div>
        <div className="chat-header-title">Lorem ipsum dolor...</div>{" "}
        <div className="chat-header-icon" style={{ marginRight: "35px" }} onClick={modalHandler}>
          <span className="material-icons-outlined" style={{ fontSize: "28px" }}>
            logout
          </span> 
        </div>
      </div>
      <div ref={RefViewControll} className="chat-message-container">
        <MessagelList showMessage={showMessage} sendNick={sendNick}/>
      </div>
      <div className="chat-input-wrap">
       <MessageInput sendMessageFN={sendMessageFN} setSendMessage={setSendMessage} sendMessage={sendMessage}/>
      </div>
      <MyModal isOpen={modalIsopen} handleClickCancel={handleClickCancel}/>
    </div>
  );
};
export default Chat;


