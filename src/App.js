import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Write from "./pages/Write";
import FirstLogin from "./pages/FirstLogin";
import MyInfo from "./pages/MyInfo";
import styled from "styled-components";
import testimage from "../src/image/11.jpg";
import Enter from "./pages/Enter";
import Inputaddress from "./pages/Inputaddress";
import PostDetail from "./pages/PostDetail";
import PostCard from "./components/PostCard";


function App() {
  return (
    <>
      <Navbar />
      <Background>
        <Webview>나는 없어질 애</Webview>
        <Appview>
          {" "}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/write" element={<Write />} />
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/firstlogin" element={<FirstLogin />} />
            <Route path="/enter" element={<Enter />} />
            <Route path="/inputaddress" element={<Inputaddress />} />
            <Route path="/postdetail" element={<PostDetail />} />
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
  width: 521px;
  height: 100vh;
  background: white;
  margin-right: 50px;
  overflow: auto;
`;
