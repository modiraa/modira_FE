import React from 'react'
import Message from './Message'

const MessageList = ({showMessage,sendNick}) => {

    return (
    <div >
        {showMessage?.map((v,i,arr)=><Message key={i} messageData={v} sendNick={sendNick} prevData={arr[i-1]}/>)}
    </div>
  )
}

export const MemozizedMessageList= React.memo(MessageList);
export default MessageList;