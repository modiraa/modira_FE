import React from 'react'
import MyIcon from '../../element/MyIcon'
import ProfileBg from '../public/ProfileBg'

const UserInformation = ({modalIsopen,dataProfile}) => {
  return (
    <div className='wrap-userinformation'>
        
           {!modalIsopen ? (
          <>
            <div className="user-wrap-countlike">
              <div className="arrow_box">
                <MyIcon sizePx={16} iconName={"favorite"} color="beige" />
                <span className="userprofile-like-text">
                  {dataProfile?.score}
                </span>
              </div>
            </div>
            <div className="userprofile-background-img">
              <ProfileBg ProfileImg={dataProfile?.userProfile} />
            </div>
          </>
        ) : (
          <>
            <div className="user-wrap-countlike"></div>{" "}
            <div className="userprofile-background-img" />
          </>
        )}

        <div className="user-nick font-bold">{dataProfile?.nickname}</div>
        <div className="user-wrap-sexAndage">
          <div className="user-sexAndage">
            <div className="user-sexAndage-text font-medium">
              {dataProfile?.gender}
            </div>
          </div>
          <div className="user-sexAndage">
            <div className="user-sexAndage-text font-medium">
              {dataProfile?.age}
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserInformation