import Stomp from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import styled from "styled-components";
import testimg from "../image/11.jpg";
import { FiChevronLeft } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router";

//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");
  const RefViewControll = React.useRef();
  const navigate=useNavigate();

  React.useEffect(() => {
    // console.log(showMessage);
    //가장 최근 채팅 보여주기
    if (RefViewControll.current) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
   
    }
  }, [showMessage]);
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
    // console.log("여기안와?");
    const soketMessage = JSON.parse(greeting.body);

    showMessage.push(soketMessage);

    setShowMessage([...showMessage]);

    // console.log("쇼메세지", showMessage, "저장할애", soketMessage);
  }

  function disconnect() {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setIsConnected(false);
    // console.log("Disconnected");
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
      console.log(error);
    }
    // 채팅을 보낸다.
  }
  return (
    <div>
      <button onClick={connect}>연결!</button>
      <button onClick={disconnect}>소켓 연결 끊기!</button>
      <button onClick={()=>navigate("/inputaddress")}>inputpage이동</button>
      <hr></hr>
      <input
        placeholder="nickname을 입력하세요"
        onChange={(e) => {
          setSendNick(e.target.value);
        }}
      ></input>
      <button onClick={sendNicknameFN}>닉네임등록</button>
      <hr></hr>

      <hr />
      <HeaderChatRoom>
        <FiChevronLeft size={24} />
        <div>방이름</div> <BiExit size={26} />
      </HeaderChatRoom>
      <ContainerMessage ref={RefViewControll}>
        {showMessage.map((v, i, arr) => {
          if (sendNick !== v.sender) {
            if (i !== 0 && arr[i - 1].sender == v.sender) {
              return (
           <div  key={i} style={{display:"flex",marginLeft:"70px",marginTop:"10px"}}>
 <TextSameNick>{v.message}</TextSameNick>
           </div>
                 
            
              );
            }
            return (
              <WrapImgAndChat key={i}>
                <WrapLeftChat>
                  <img src={testimg} style={{ height: "50px",width:"50px" }}></img>

                  <ContainerNickAndText>
                    <div>{v.sender}</div>
                    <TextMessage>{v.message}</TextMessage>
                  </ContainerNickAndText>
                </WrapLeftChat>
              </WrapImgAndChat>
            );
          } else {
            if (i !== 0 && arr[i - 1].sender == v.sender) {
              return (
           <div key={i} style={{display:"flex",marginRight:"70px",flexDirection:"row-reverse",marginTop:"10px"}}>
 <TextSameNick >{v.message}</TextSameNick>
           </div>
                 
            
              );
            }
            return (
              <WrapImgAndChat key={i}>
                <WrapRightChat>
                  <img src={testimg} style={{ height: "100%" }}></img>

                  <ContainerNickAndText>
                    <div>{v.sender}</div>
                    <TextMessage>{v.message}</TextMessage>
                  </ContainerNickAndText>
                </WrapRightChat>
              </WrapImgAndChat>
            );
          }
        })}
      </ContainerMessage>
      <WrapChat>
        <InputChatMessage
          placeholder="채팅입력"
          onChange={(e) => {
            setSendMessage(e.target.value);
          }}
        />
        <button onClick={sendMessageFN}>메시지보내기</button>
      </WrapChat>
    </div>
  );
};
export default Chat;
const HeaderChatRoom = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  align-items: center;
  background-color: #e7e7e7;
  justify-content: space-between;
`;
const TitleRoom = styled.div`
  font-size: 24px;
`;

const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 500px;
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
const TextSameNick=styled.div`
background-color: #565656;
  color: white;
  `

const TextMessage = styled.div`
  background-color: #565656;
  color: white;
`;
const WrapChat = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e7e7e7;
  height: 96px;
  align-items: center;
`;
const InputChatMessage = styled.input`
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  width: 473px;
  height: 42px;
  border-radius: 24px;
`;
