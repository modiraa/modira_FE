import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Enter from "../pages/Enter";
import GoogleRedirect from "../pages/GoogleRedirect";
import InputAddress from "../pages/Inputaddress"
import Kakaoredirect from "../pages/Kakaoredirect";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MorePost from "../pages/MorePost";
import MyInfo from "../pages/MyInfo";
import MyRoom from "../pages/Myroom";
import NaverRedirect from "../pages/NaverRedirect";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import SelectAge from "../pages/SelectAge";
import SelectDate from "../pages/SelectDate";
import SelectGender from "../pages/SelectGender";
import SelectGps from "../pages/SelectGps";
import SelectMenu from "../pages/SelectMenu";
import SelectPayment from "../pages/SelectPayment";
import SelectPeopleCount from "../pages/SelectPeopleCount";
import SelectTime from "../pages/SelectTime";
import UserProfile from "../pages/UserProfile";
import Write from "../pages/Write";
import Mapgps from "./Mapgps";
import PostCard from "./PostCard";
import ProfileBg from "./ProfileBg";



const RouteList = () => {
  return (
   
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/oauth/main" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/write" element={<Write />} />
    <Route path="/selecttime" element={<SelectTime />} />
    <Route path="/selectdate" element={<SelectDate />} />
    <Route path="/selectgps" element={<SelectGps />} />
    <Route path="/selectpeoplecount" element={<SelectPeopleCount />} />
    <Route path="/selectmenu" element={<SelectMenu />} />
    <Route path="/selectpayment" element={<SelectPayment />} />
    <Route path="/selectgender" element={<SelectGender />} />
    <Route path="/selectage" element={<SelectAge />} />
    <Route path="/myinfo" element={<MyInfo />} />
    <Route path="/mapgps" element={<Mapgps />} />
    <Route path="/morepost" element={<MorePost />} />
    <Route path="/profilebg" element={<ProfileBg />} />

    <Route path="/register" element={<Register />} />
    <Route path="/enter" element={<Enter />} />
    <Route path="/inputaddress" element={<InputAddress />} />
    <Route path="/auth/kakao/callback" element={<Kakaoredirect />} />
    <Route path="/login/ouath2/code/naver" element={<NaverRedirect />} />
    <Route path="/auth/google/callback" element={<GoogleRedirect />} />
    <Route path="/postdetail:postId" element={<PostDetail />} />
    <Route path="/postcard" element={<PostCard />} />
    <Route path="/userprofile" element={<UserProfile />} />
    <Route path="/myroom" element={<MyRoom />} />
  </Routes>
 
  )
}

export default RouteList