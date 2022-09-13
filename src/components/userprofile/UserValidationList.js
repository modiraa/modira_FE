import React from 'react'
import UserList from './UserList'

const UserValidationList = ({userList,setUserChoiceValidation}) => {
  return (
    <div className="user-wrap-userchange">
    <div className="user-userchange-title font-bold">
      모임원들이 평가를 기다리고 있어요!
    </div>
    <div className="user-wrap-userchange-userlist">
      {userList.map((v, i) => (
        <UserList
          data={v}
          key={i}
          setUserChoiceValidation={setUserChoiceValidation}
        />
      ))}
      
    </div>
  </div>
  )
}

export default UserValidationList