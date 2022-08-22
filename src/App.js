import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Write from "./pages/Write";
import FirstLogin from "./pages/FirstLogin";
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
import Myroom from "./pages/Myroom";

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
            <Route path="/myroom" element={<Myroom />} />

            <Route path="/firstlogin" element={<FirstLogin />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/inputaddress" element={<Inputaddress />} />
            <Route path="/auth/kakao/callback" element={<Kakaoredirect />} />
            <Route path="/login/ouath2/code/naver" element={<NaverRedirect />} />
            <Route path="/auth/google/callback" element={<GoogleRedirect />} />
            <Route path="/postdetail:postId" element={<PostDetail />} />
            <Route path="/postcard" element={<PostCard />} />
            <Route path="/userprofile" element={<UserProfile />} />

          </Routes>
        </Appview>
      </Background>
    
  );
}

export default App;

const Background = styled.div`
  width: 100%;
  height: 1030px;
  
  /* background-image: url(${testimage});
  background-repeat: no-repeat;
  background-size: 100%; */
  background-color:#EEEEEE;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 912px) {
    background-image: none;
    justify-content: center;
  }
 
`;
const Webview = styled.div`
  @media screen and (max-width: 912px) {
    display: none;
  }
  width: 40%;
  height:100%;
  background-color:#EEEEEE;
  padding: 98px 0px 0px 318px;
`;

const Appview = styled.div`
  @media screen and (max-width: 912px) {
    width: 525px;
    margin-right: 0px;
  }
  min-width: 525px;
  width: 525px;
  height: 100%;
  background: white;
  margin-right: 349px;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;
