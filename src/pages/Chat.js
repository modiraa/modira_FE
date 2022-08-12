import Stomp from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
const Chat = () => {
  const [isConnected,setIsConnected]=React.useState(false);
  const [showMessage,setShowMessage]=React.useState([]);
  const [sendMessage,setSendMessage]=React.useState("");
  const [sendNick,setSendNick]=React.useState("");

  function connect(){
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({},connected)

  }
  function connected(){
    setIsConnected(true);
    stompClient.subscribe('/topic/greetings',subscribed);
  }
  function subscribed(greeting){
    console.log(JSON.parse(greeting.body).content)//채팅 보내면 채팅을 뿌려줄것이다!
   

  }

  function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setIsConnected(false);
    console.log("Disconnected");
}
function sendMessageFN(){
  
}
function sendNicknameFN(){
  stompClient.send("/app/hello", {}, JSON.stringify({'name': sendNick}));// 채팅을 보낸다.
}
  return (
    <div>
      <button onClick={connect}>연결!</button>
      <button onClick={disconnect}>소켓 연결 끊기!</button>
      <hr></hr>
      <input placeholder="nickname을 입력하세요" onChange={(e)=>{setSendNick(e.target.value)}}></input><button onClick={sendNicknameFN}>닉네임등록</button>
      <hr></hr>
      <input placeholder="message을 입력하세요" onChange={(e)=>{setSendMessage(e.target.value);console.log(sendMessage)}}></input><button onClick={sendMessageFN}>메시지보내기</button>

    </div>
  )
}
export default Chat