import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//css
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
//conponent
import UserList from "../components/userprofile/UserList";
import ProfileBg from "../components/public/ProfileBg";
import LowerNavbar from "../components/public/LowerNavbar";
import MyIcon from "../element/MyIcon";
import MyModal from "../components/public/MyModal";

const UserProfile = () => {
  const [dataProfile, setDataProfile] = React.useState();
  const [modalIsopen, setmodalIsopen] = React.useState(true);
  const Auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const showUser = location.state;
  const [userList, setUserList] = React.useState([]);
  const [userChoiceValidation, setUserChoiceValidation] =
    React.useState(showUser);
  const roomId = sessionStorage.getItem("roomId");
  console.log(location);
  console.log(showUser);

  const handleClickCancel = () => {
    setmodalIsopen(false);
  };

  const showProfileAX = async () => {
    await axios
      .get(`http://3.34.129.164/api/user/info/${userChoiceValidation}`)
      .then((response) => {
        console.log(response);
        setDataProfile(response.data);
        console.log(response.data.score);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const showListParticipants = async () => {
    await axios
      .get(`http://3.34.129.164/api/userlist/${roomId}`)
      .then((response) => {
        console.log(response);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    showProfileAX();
  }, [userChoiceValidation]);
  useEffect(() => {
    showListParticipants();
  }, [userChoiceValidation]);

  const likePlusScore = async () => {
    const Auth = sessionStorage.getItem("token");

    await axios
      .post(
        "http://3.34.129.164/api/likes",
        { userId: userChoiceValidation },
        {
          headers: {
            Authorization: Auth,
          },
        }
      )
      .then((res) => {
        console.log(res);
        showProfileAX();
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  const dislikePlusScore = async () => {
    const Auth = sessionStorage.getItem("token");

    await axios
      .post(
        "http://3.34.129.164/api/hates",
        { userId: userChoiceValidation },
        {
          headers: {
            Authorization: Auth,
          },
        }
      )
      .then((res) => {
        console.log(res); 

        showProfileAX();
      
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const exitPost = async (event) => {
    event.stopPropagation();
    await axios
      .post(`http://3.34.129.164/api/leave/${roomId}`, null, {
        headers: {
          Authorization: Auth,
        },
      })
      .then((res) => {
        console.log(res);
        sessionStorage.removeItem("rommId");
        alert("모임나가기가 완료되었습니다!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="useprofile-wrap">
      <div className="userprofile-header-wrap">
        <div
          className="userprofile-header-icon"
          style={{ marginLeft: "28px" }}
          onClick={(event) => {
            event.stopPropagation();
            navigate(-1);
          }}
        >
          <MyIcon sizePx={28} iconName={"arrow_back_ios"} cursor="pointer" />

          
        </div>
        <div onClick={exitPost} className="userprofile-header-btn" ><div>모임 나가기</div></div>
      </div>

      <div className="wrap-middle">
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
        ):<><div className="user-wrap-countlike"></div> <div className="userprofile-background-img"/></>}

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
        <div className="user-wrap-like">
          <div className="user-like" onClick={dislikePlusScore}>
            <div className="user-like-text font-bold">-1 싫어요</div>
          </div>
          <div
            className="user-like"
            style={{ backgroundColor: "#FFBB31" }}
            onClick={likePlusScore}
          >
            <div
              className="user-like-text font-bold"
              style={{ color: "white" }}
            >
              +1 좋아요
            </div>
          </div>
        </div>
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
      </div>
      <MyModal isOpen={modalIsopen} handleClickCancel={handleClickCancel} />

      <LowerNavbar />
    </div>
  );
};

export default UserProfile;
