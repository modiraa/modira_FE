import React, { useRef } from "react";
import MyIcon from "../../element/MyIcon";

const MessageInput = ({ setSendMessage, sendMessageFN, sendMessage }) => {
  const refInput = useRef();
  const lineBreackInput = () => {
    console.log(refInput.current.value);
    // refInput.current.value=refInput.current.value+"&#10;"
  };
  const sendmMessegeByEnter = () => {
    console.log("실행됨!");
    sendMessageFN();
    refInput.current.value = "";
  };

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
  }, [sendMessage]);

  return (
    <div className="chat-input-wrap-inpuAndicon">
      <input
        className="chat-input"
        placeholder="채팅입력"
        ref={refInput}
      />
      <div className="chat-input-location-icon">
        <div
          className="chat-input-incon-circle"
          onClick={() => {
            sendMessageFN();
            setSendMessage(refInput.current.value)
            refInput.current.value = "";
          }}
        >
          <MyIcon sizePx={23} iconName={"arrow_upward"} />
        </div>
      </div>
      {/* <button onClick={sendMessageFN}>메시지보내기</button> */}
    </div>
  );
};

export default MessageInput;
