import React from 'react'
//css
import"./UserList.css"


const UserList = ({data,setUserChoiceValidation}) => {
  // console.log(data)
  return (
    <div className='userlist-wrap' onClick={()=>{setUserChoiceValidation(data.userId)}}>
        <img src={data.userProfile} className="userlist-profile"></img>
        <div className='userlist-nick'>{data.nickname}</div>
    </div>
  )
}

export default UserList