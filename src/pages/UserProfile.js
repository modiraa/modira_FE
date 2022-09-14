import React, { useEffect } from "react";
import { useLocation, } from "react-router-dom";
import axios from "axios";
//css
import "../css(subin)/chat.css";
import "../css(subin)/UserProfile.css";
//conponent
import LowerNavbar from "../components/public/LowerNavbar";
import UserprofileHeader from "../components/userprofile/UserprofileHeader";
import UserValidationList from "../components/userprofile/UserValidationList";
import UserInformation from "../components/userprofile/UserInformation";
import ValidationUserScore from "../components/userprofile/ValidationUserScore";
import MyModal from"../components/public/MyModal"


const UserProfile = () => {
  const [dataProfile, setDataProfile] = React.useState();
  const [modalIsopen, setmodalIsopen] = React.useState(true);
  const roomId = sessionStorage.getItem("roomId");
  const location = useLocation();
  const showUser = location.state;
  const [userList, setUserList] = React.useState([]);
  const [userChoiceValidation, setUserChoiceValidation] =
    React.useState(showUser);

  useEffect(() => {
    showProfileAX();
  }, [userChoiceValidation]);

  useEffect(() => {
    showListParticipants();
  }, [userChoiceValidation]);


  const handleClickCancel = () => {
    setmodalIsopen(false);
  };

  const showProfileAX = async () => {
    await axios
      .get(`http://3.34.129.164/api/user/info/${userChoiceValidation}`)
      .then((response) => {
        setDataProfile(response.data);
      })
      .catch((error) => {
      });
  };
  const showListParticipants = async () => {
    await axios
      .get(`http://3.34.129.164/api/userlist/${roomId}`)
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
      });
  };




  return (
    <div className="useprofile-wrap">
      <UserprofileHeader/>
      <div className="wrap-middle">
      <UserInformation dataProfile={dataProfile} modalIsopen={modalIsopen}/>
        <ValidationUserScore showProfileAX={showProfileAX} userChoiceValidation={userChoiceValidation}/>
       <UserValidationList userList={userList} setUserChoiceValidation={setUserChoiceValidation}/>
      </div>
      <MyModal isOpen={modalIsopen} handleClickCancel={handleClickCancel} />
      <div className="subsitute-lowernavar"></div>
      <div className="lowernavbar">
        {!modalIsopen&&<LowerNavbar />}
      </div>
    </div>
  );
};

export default UserProfile;
