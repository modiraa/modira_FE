import Stomp from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import styled from "styled-components";
//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");

React.useState(()=>{
  console.log(showMessage)
},[showMessage])

  function connect() {
    var socket = new SockJS("http://13.125.116.193/ws/chat");
    stompClient = Stomp.over(socket);
    // stompClient.debug=null;
    stompClient.connect({}, connected);
  }
  function connected() {
    setIsConnected(true);
    stompClient.subscribe("/topic", subscribed);
  }
  function subscribed(greeting) {
    console.log("여기안와?")
    const soketMessage=JSON.parse(greeting.body)
    
    const newMessage=showMessage.push(soketMessage)

    setShowMessage(prev=>newMessage) 

  }

  function disconnect() {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setIsConnected(false);
    console.log("Disconnected");
  }
  function sendNicknameFN() {}

  function sendMessageFN() {
    try {
      stompClient.send(
        "/app/chat/message",
        {},
        JSON.stringify({
          message: sendMessage,
          sender: sendNick,
          // type:"aa",
          // roomId:"aa",
  
        })
      );
    } catch (error) {
      console.log(error)
      
    }
     // 채팅을 보낸다.
  }
  return (
    <div>
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
      <hr></hr>
      <input
        placeholder="message을 입력하세요"
        onChange={(e) => {
          setSendMessage(e.target.value);
        }}
      ></input>
      <button onClick={sendMessageFN}>메시지보내기</button>
      <hr/>
      <ContainerMessage >
      {showMessage.map((v,i)=>{return <div key={i}>{v.sender}:{v.message}</div>})}
      </ContainerMessage>
      

    </div>
  );
};
export default Chat;


const ContainerMessage=styled.div`
display: flex;
flex-direction:column;
`