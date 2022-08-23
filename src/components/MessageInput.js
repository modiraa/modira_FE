import React, { useRef } from 'react'

const MessageInput = ({setSendMessage,sendMessageFN,sendMessage}) => {

    const refInput=useRef();
    const lineBreackInput=()=>{
        console.log(refInput.current.value)
        // refInput.current.value=refInput.current.value+"&#10;"
    }
    const sendmMessegeByEnter=()=>{
console.log("실행됨!")
sendMessageFN()
    }
   
    React.useEffect(() => {
        const keyDownHandler = event => {
        //   console.log('User pressed: ', event.key);
    
          if (event.key === 'Enter'&&!event.shiftKey) {
            event.preventDefault();
    
            // 👇️ your logic here
            sendmMessegeByEnter();
          }
          if(event.key==="Enter"&&event.shiftKey){
            console.log("shifT")
            if(refInput.current.value.split('\n').length>4){
                alert("띄워쓰기 넘 많어잉")
            }
            lineBreackInput()
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
      }, [sendMessage]);

  return (
    <div>
<textarea className="chat-input"
    placeholder="채팅입력"
    onChange={(e) => {
      setSendMessage(e.target.value);
    }}
    ref={refInput}
  
  />
  <button onClick={sendMessageFN}>메시지보내기</button>
    </div>
    
  )
}

export default MessageInput