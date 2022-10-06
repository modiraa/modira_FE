import React, { useRef } from "react";
import MyIcon from "../../element/MyIcon";
let sendMessage = "";
const MessageInput = ({ stompClient }) => {
  const refInput = useRef();
  const authNoBearer = sessionStorage.getItem("token")?.split(" ")[1];
  const roomId = sessionStorage.getItem("roomId");
  

  const lineBreackInput = () => {
    console.log(refInput.current.value);
    // refInput.current.value=refInput.current.value+"&#10;"
  };
  const sendmMessegeByEnter = () => {
    sendMessageFN();
    refInput.current.value = "";
  };
  function sendMessageFN() {
    sendMessage = refInput.current?.value;

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
    } catch (error) {}
  }

  React.useEffect(() => {
    const keyDownHandler = (event) => {
      //   console.log('User pressed: ', event.key);

      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();

        // 👇️ your logic here

        sendmMessegeByEnter();
      }
      if (event.key === "Enter" && event.shiftKey) {
        console.log("shifT");
        if (refInput.current.value.split("\n").length > 4) {
          alert("띄워쓰기 넘 많어잉");
        }
        lineBreackInput();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [sendmMessegeByEnter]);

  return (
    <div className="chat-input-wrap-inpuAndicon">
      <input className="chat-input" placeholder="채팅입력" ref={refInput} />
      <div className="chat-input-location-icon">
        <div
          className="chat-input-incon-circle"
          onClick={() => {
            sendMessageFN();
            refInput.current.value = "";
          }}
        >
          <MyIcon sizePx={23} iconName={"arrow_upward"} />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
