import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Write from "./pages/Write";
import Register from "./pages/Register";
import MyInfo from "./pages/MyInfo";
import styled from "styled-components";
import testimage from "../src/image/11.jpg";
import Enter from "./pages/Enter";
import Inputaddress from "./pages/Inputaddress";
import Kakaoredirect from "./pages/Kakaoredirect";
import NaverRedirect from "./pages/NaverRedirect";
import GoogleRedirect from "./pages/GoogleRedirect";
import PostDetail from "./pages/PostDetail";
import PostCard from "./components/PostCard";
import Mapgps from "./components/Mapgps";
import SelectTime from "./pages/SelectTime";
import SelectDate from "./pages/SelectDate";
import SelectGps from "./pages/SelectGps";
import SelectMenu from "./pages/SelectMenu";
import SelectPayment from "./pages/SelectPayment";
import SelectGender from "./pages/SelectGender";
import SelectAge from "./pages/SelectAge";
import WebViewLeft from "./components/WebViewLeft";
import UserProfile from "./pages/UserProfile";
import SelectPeopleCount from "./pages/SelectPeopleCount";
import MorePost from "./pages/MorePost";
import MyRoom from "./pages/Myroom";

function App() {
  return (
    <Background>
      <Webview>
        <WebViewLeft />
      </Webview>
      <Appview>
        {" "}
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

          <Route path="/register" element={<Register />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/inputaddress" element={<Inputaddress />} />
          <Route path="/auth/kakao/callback" element={<Kakaoredirect />} />
          <Route path="/login/ouath2/code/naver" element={<NaverRedirect />} />
          <Route path="/auth/google/callback" element={<GoogleRedirect />} />
          <Route path="/postdetail:postId" element={<PostDetail />} />
          <Route path="/postcard" element={<PostCard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/myroom" element={<MyRoom />} />
        </Routes>
      </Appview>
    </Background>
  );
}

export default App;

const Background = styled.div`
  max-width:1920px;
  height: 1030px;

  /* background-image: url(${testimage});
  background-repeat: no-repeat;
  background-size: 100%; */
  background-color: #eeeeee;

  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 1182px) {
    background-image: none;
    justify-content: center;
  }
`;
const Webview = styled.div`
  @media screen and (max-width: 1182px) {
    display: none;
  }
  width: 40%;
  height: 100%;
  background-color: #eeeeee;
  padding: 98px 0px 0px 0px;
  margin-right: 13.188em;
`;

const Appview = styled.div`
  @media screen and (max-width: 1182px) {
    width: 525px;
    margin-right: 0px;
  }
  min-width: 525px;
  width: 525px;
  height: 100%;
  background: white;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
