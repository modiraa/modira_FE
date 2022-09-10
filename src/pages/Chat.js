import Stomp, { connect } from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import "../css(subin)/chat.css";
import MessageList from "../components/chat/MessageList"
import MessageInput from "../components/chat/MessageInput";
import MyModal from "../components/public/MyModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
let prevMessage = [];
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");
  const [modalIsopen, setmodalIsopen] = React.useState(false);
  const RefViewControll = React.useRef();
  const navigate = useNavigate();
  const Auth = sessionStorage.getItem("token");
  const authNoBearer = sessionStorage.getItem("token")?.split(" ")[1];

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
      .get(
        "http://3.34.129.164/chat/messages/ec0d4dfb-12e3-40b9-bd8e-2260e638947c"
      )
      .then((response) => {
        prevMessage = response.data.content.reverse();
        console.log(prevMessage);
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
    stompClient.subscribe(
      `/sub/chat/room/ec0d4dfb-12e3-40b9-bd8e-2260e638947c`,
      subscribed,
      {
        Authorization: authNoBearer,
      }
    );
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
          roomId: "ec0d4dfb-12e3-40b9-bd8e-2260e638947c",
        })
      );
      setSendMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  //modal창 함수
  const modalHandler = () => {
    setmodalIsopen(true);
  };
  const handleClickCancel = () => {
    setmodalIsopen(false);
  };
 

  return (
    <div className="chat-wrap">
      <div className="chat-header-wrap">
        <div
          className="chat-header-icon"
          style={{ marginLeft: "28px", cursor: "pointer" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px",fontWeight:"bold" }}
          >
            arrow_back_ios
          </span>
        </div>
        <div className="chat-header-title font-bold">Lorem ipsum dolor...</div>{" "}
        <div
          className="chat-header-icon"
          style={{ marginRight: "35px", cursor: "pointer" }}
          onClick={modalHandler}
        >
          <span
            className="material-icons-outlined"
            style={{ fontSize: "28px" }}
          >
            logout
          </span>
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
      <MyModal isOpen={modalIsopen} handleClickCancel={handleClickCancel} />
    </div>
  );
};
export default Chat;
