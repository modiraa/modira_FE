import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Write from "./pages/Write";
import FirstLogin from "./pages/FirstLogin";
import MyInfo from "./pages/MyInfo";
import styled from"styled-components"
import testimage from"../src/image/11.jpg"
import Inputaddress from"./pages/Inputaddress"
import"./index.css"

function App() {

  // write에 쓸 가게 주소
  let [joso,setJuso]=React.useState('')

  return (
    <>
      <Background>
        <Test2>나는 없어질 애</Test2>
        <Test1 className="box">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/detail/:postId" element={<Detail />} />
            <Route path="/post" element={<Post />} />
            <Route path="/write" element={<Write joso={joso}/>} />
            <Route path="/myinfo" element={<MyInfo />} />
            <Route path="/firstlogin" element={<FirstLogin />} />
            <Route path="/Inputaddress" element={<Inputaddress setJuso={setJuso}/>} />
          </Routes>
        </Test1>
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
background-size:  100%;

display: flex;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width: 900px){
 background-image: none;
 justify-content:center;
}

`
const Test2 = styled.div`
@media screen and (max-width: 900px){
  display: none;
  
}
  width: 40%;
  height: 100vh;
  background-color: blue;

`

const Test1=styled.div`
overflow: auto;
@media screen and (max-width: 900px){
  width: 400px;
  margin-right:0px;


}
  overflow: auto;
  width: 521px;
  height: 887px;
  background: white;
  margin-right:50px;

`
