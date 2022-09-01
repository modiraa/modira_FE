import React from 'react'
import"../css(subin)/uselist.css"
import test from"../image/11.jpg"

const UserList = () => {
  return (
    <div className='userlist-wrap'>
        <img src={test} className="userlist-profile"></img>
        <div className='userlist-nick'>Lorem ipsum dolor</div>
    </div>
  )
}

export default UserList