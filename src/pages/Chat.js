import Stomp from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import "../css(subin)/chat.css";
import MessageList from "../components/chat/MessageList";
import MessageInput from "../components/chat/MessageInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyIcon from "../element/MyIcon";

//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
let prevMessage = [];
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");

  const RefViewControll = React.useRef();
  const navigate = useNavigate();
  const Auth = sessionStorage.getItem("token");
  const authNoBearer = sessionStorage.getItem("token")?.split(" ")[1];
  const roomId = sessionStorage.getItem("roomId");
  const postTitle = sessionStorage.getItem("postTitle");

  //소켓연결
  React.useEffect(() => {
    var socket = new SockJS("http://3.34.129.164/ws-stomp");
    stompClient = Stomp.over(socket);

    stompClient.connect(
      {
        Authorization: authNoBearer,
      },
      connected
    );
    //unmount시 연결헤제
    return () => {
      disconnect();
    };
  }, []);

  //가장 최근 채팅 보여주기
  React.useEffect(() => {
    if (RefViewControll.current && prevMessage.length > 0) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [showMessage, sendMessage, isConnected]);
  // 유저의 방 정보 가기오기
  React.useEffect(() => {
    loadUserInfo();
  }, []);
  // 지난 메시지 가져오기
  React.useEffect(() => {
    loadPrevMessage();
  }, []);

  //채팅관련 axios통신 함수
  const loadPrevMessage = async () => {
    await axios
      .get(`http://3.34.129.164/chat/messages/${roomId}`)
      .then((response) => {
        prevMessage = response.data.content.reverse();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadUserInfo = async () => {
    await axios
      .get("http://3.34.129.164/api/user/info", {
        headers: {
          Authorization: Auth,
        },
      })
      .then((response) => {
        setSendNick(response.data.nickname);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 소켓 함수
  function connected() {
    setIsConnected(true);
    stompClient.subscribe(`/sub/chat/room/${roomId}`, subscribed, {
      Authorization: authNoBearer,
    });
  }

  function subscribed(greeting) {
    const soketMessage = JSON.parse(greeting.body);
    showMessage.push(soketMessage);
    setShowMessage([...showMessage]);
  }

  function disconnect() {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setIsConnected(false);
  }

  function sendMessageFN() {
    try {
      stompClient.send(
        "/pub/chat/message",
        {
          Authorization: authNoBearer,
        },
        JSON.stringify({
          message: sendMessage,
          type: "TALK",
          roomId: roomId,
        })
      );
      setSendMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  //modal창 함수

  const exitChatRoom = (event) => {
    event.stopPropagation();
    navigate("/userprofile");
  };

  return (
    <div className="chat-wrap">
      <div className="chat-header-wrap">
        <div
          className="chat-header-icon"
          onClick={(event) => {
            event.stopPropagation();
            navigate(-1);
          }}
        >
          <MyIcon sizePx={28} iconName={"arrow_back_ios"} />
        </div>
        <div className="chat-header-title font-bold">{postTitle}</div>{" "}
        <div
          className="chat-header-icon"
          style={{ marginRight: "35px", cursor: "pointer" }}
          onClick={exitChatRoom}
        >
          <MyIcon sizePx={28} iconName={"logout"} />
        </div>
      </div>
      <div ref={RefViewControll} className="chat-message-container">
        <MessageList showMessage={prevMessage} sendNick={sendNick} />
        <MessageList showMessage={showMessage} sendNick={sendNick} />
      </div>
      <div className="chat-input-wrap">
        <MessageInput
          sendMessageFN={sendMessageFN}
          setSendMessage={setSendMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default Chat;
