import Stomp, { connect } from "stompjs";
import SockJS from "sockjs-client";
import React from "react";
import "../css(subin)/chat.css";
import MessagelList from "../components/MessagelList";
import MessageInput from "../components/MessageInput";
import MyModal from "../components/MyModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://github.com/spring-guides/gs-messaging-stomp-websocket/blob/main/complete/src/main/resources/static/app.js 참고

var stompClient = null;
let prevMessage=[];
const Chat = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  
  const [showMessage, setShowMessage] = React.useState([]);
  const [sendMessage, setSendMessage] = React.useState("");
  const [sendNick, setSendNick] = React.useState("");
  const [enterChatRoom, setEnterChatRoom] = React.useState([]);
  const [modalIsopen, setmodalIsopen] = React.useState(false);
  const [postId, setPostId] = React.useState("");
  const [chatRoomId, setChatRoomId] = React.useState("");
  const RefViewControll = React.useRef();
  const navigate = useNavigate();
  const Auth = sessionStorage.getItem("token");
  let auth = sessionStorage.getItem("token")?.split(" ")[1];

  React.useEffect(() => {
    var socket = new SockJS("http://3.34.129.164/ws-stomp");
    stompClient = Stomp.over(socket);
    console.log(auth);
    stompClient.connect(
      {
        Authorization: auth,
      },
      connected
    );
  }, []);
  React.useEffect(() => {
    console.log(showMessage);

    //가장 최근 채팅 보여주기
    if (RefViewControll.current) {
      RefViewControll.current.scrollTop = RefViewControll.current.scrollHeight;
    }
  }, [showMessage, enterChatRoom, sendMessage, chatRoomId]);

  React.useEffect(() => {
    loadUserInfo();
  }, []);

  React.useEffect(()=>{
    loadPrevMessage();
  },[])
  const loadPrevMessage=async()=>{
    await axios
    .get("http://3.34.129.164/chat/messages/15cee64a-27d6-47a9-a1ae-c9ba15c4be50")
    .then((response) => {
  
      console.log("api 호출 성공", response.data.content);
   
     prevMessage=response.data.content.reverse();
     console.log(prevMessage)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const loadUserInfo = async () => {
    await axios
      .get("http://3.34.129.164/api/user/info", {
        headers: {
          Authorization: Auth,
        },
      })
      .then((response) => {
        setSendNick(response.data.nickname);
        console.log("api 호출 성공", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalHandler = () => {
    setmodalIsopen(true);
  };
  const handleClickCancel = () => {
    setmodalIsopen(false);
  };

  function connected() {
    setIsConnected(true);
    console.log(chatRoomId);

    stompClient.subscribe(
      `/sub/chat/room/15cee64a-27d6-47a9-a1ae-c9ba15c4be50`,
      subscribed,
      {
        Authorization: auth,
      }
    );
  }
  //
  function subscribed(greeting) {
    console.log("여기올텐데");
    console.log(greeting);
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
          Authorization: auth,
        },
        JSON.stringify({
          message: sendMessage,
          sender: sendNick,
          type: "TALK",
          roomId: "15cee64a-27d6-47a9-a1ae-c9ba15c4be50",
        })
      );
      setSendMessage("")
    } catch (error) {
      console.log(error);
    }
  }
  const makeChatRoom = async () => {
    const params = new URLSearchParams();
    params.append("name", "11");

    await axios
      .post(`http://3.34.129.164/chat/room`, params)
      .then((response) => {
        console.log("성공", response);
        setChatRoomId(response.data.uuid);
        console.log(response.data.uuid);
        console.log(chatRoomId);
      })
      .catch((error) => {
        console.log("에러", error);
      });
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
            style={{ fontSize: "28px" }}
          >
            arrow_back_ios
          </span>
        </div>
        <div className="chat-header-title">Lorem ipsum dolor...</div>{" "}
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
        11
        <MessagelList showMessage={prevMessage} sendNick={sendNick}/>
        <MessagelList showMessage={showMessage} sendNick={sendNick} />
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
