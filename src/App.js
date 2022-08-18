import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Write from "./pages/Write";
import FirstLogin from "./pages/FirstLogin";
import MyInfo from "./pages/MyInfo";
import styled from "styled-components"
import testimage from "../src/image/11.jpg"
import Enter from "./pages/Enter";
import Inputaddress from "./pages/Inputaddress";
import Kakaoredirect from "./pages/Kakaoredirect";
import NaverRedirect from "./pages/NaverRedirect";
import GoogleRedirect from "./pages/GoogleRedirect";
import PostDetail from "./pages/PostDetail";
import PostCard from "./components/PostCard";
import Mapgps from "./components/Mapgps";
import Test from "./components/Test";
import WriteSelect from "./pages/WriteSelect";

function App() {

  // picker 값
  const [controlledSwiper, setControlledSwiper] = React.useState(null);

  return (
    <>
      <Background>
        <Webview>나는 없어질 애</Webview>
        <Appview>
          {" "}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/oauth/main" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/write" element={<Write />} />
            <Route path="/writeselect" element={<WriteSelect/>} />
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/mapgps" element={<Mapgps />} />
            <Route path="/test" element={<Test setControlledSwiper={setControlledSwiper} controlledSwiper={controlledSwiper}/>} />
            <Route path="/firstlogin" element={<FirstLogin />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/inputaddress" element={<Inputaddress />} />
            <Route path="/auth/kakao/callback" element={<Kakaoredirect />} />
            <Route path="/auth/naver/callback" element={<NaverRedirect />} />
            <Route path="/auth/google/callback" element={<GoogleRedirect />} />
            <Route path="/postdetail:postId" element={<PostDetail />} />
            <Route path="/postcard" element={<PostCard />} />
          </Routes>
        </Appview>
      </Background>
    </>
  );
}

export default App;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${testimage});
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    background-image: none;
    justify-content: center;
  }
`;
const Webview = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
  width: 40%;
  height: 100vh;
  background-color: whitesmoke;
`;

const Appview = styled.div`
  @media screen and (max-width: 900px) {
    width: 400px;
    margin-right: 0px;
  }
  width: 525px;
  height: 100vh;
  background: white;
  margin-right: 50px;
  overflow: auto;
`;
