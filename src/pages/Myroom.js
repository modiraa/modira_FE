import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";
import Navbar from "../components/Navbar";
import MiniBanner from "../image/MiniBanner.png";

const MyRoom = () => {
  const navigate = useNavigate();

  const [myData, setMyData] = useState({
    postId: "id",
    title: "Lorem ipsum dolor1",
    menuForImage: "피자이미지",
    menu: "피자",
  });

  const [joinData, setJoinData] = useState({
    postId: "id",
    title: "Lorem ipsum dolor2",
    menuForImage: "치킨이미지",
    menu: "치킨",
  });

  const getPost = async () => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    console.log(ACCESS_TOKEN);
    //생성한 모임
    await axios
      .get("http://3.34.129.164/api/myposts", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        setMyData(response.myData[0]);
        console.log("데이터 나와랏", response.myData[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });
    //참여한 모임
    await axios

      .get("http://3.34.129.164/api/myjoin", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        setJoinData(response.joinData[0]);
        console.log("데이터 나와랏", response.joinData[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);

  // //모임 삭제
  //   const removePost = async () => {
  //     // const ACCESS_TOKEN = sessionStorage.getItem("token");
  //     // console.log(ACCESS_TOKEN);
  //     await axios
  //       .delete(`http://3.34.129.164/api/post/${postId}`)
  //       .then((response) => {
  //         console.log("삭제");
  //       })
  //       .catch((error) => {
  //         console.log("에러", error);
  //       });}
  return (
    <>
      <Navbar />
      <BorderLine />
      <Container>
        <Minibanner>
          <span>
            이제 <b>혼밥</b>하지 마세요!<br></br>
            <b>
              밥 친구 찾기 플랫폼 <yellow>modira</yellow>
            </b>
          </span>
        </Minibanner>
        <CreateRoom>
          <p>생성한 모임</p>
          <Post>
            {myData ? (
              <div>
                <span className="material-symbols-outlined">add_circle</span>
                <div>새 모임 만들러 가기</div>
              </div>
            ) : (
              <div>
                <img src={myData.menuForImage} />
                <span className="material-symbols-outlined">delete</span>
                <p>게시물 삭제</p>
              </div>
            )}
          </Post>
          <Title>{myData.title}</Title>
        </CreateRoom>
        <BorderLine />
        <CreateRoom>
          <p>신청한 모임</p>
          <Post>
            {myData ? (
              <div>새 모임 만들러 가기</div>
            ) : (
              <div>
                <img src={joinData.menuForImage} />
                <span className="material-symbols-outlined">delete</span>
                <p>게시물 삭제</p>
              </div>
            )}
          </Post>
          <Title>{joinData.title}</Title>
        </CreateRoom>
      </Container>
      <div className="main-wrap-lowernavbar">
        <LowerNavbar locationIndicator={"myroom"} />
      </div>
    </>
  );
};
export default MyRoom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDGothicNeoB00";
  width: 525px;
  background-color: #fff;
  margin-bottom: 12px;
`;

const Title = styled.div`
  margin: 9px 0 38px 0;
`;

const Minibanner = styled.div`
  height: 153px;
  background-image: url(${MiniBanner});
  background-size: contain;
  font-size: 19px;
`;

const CreateRoom = styled.div`
  margin: 29px 43px 20px 43px;
  p {
    margin-bottom: 19px;
    font-size: 26px;
  }
  div {
    font-size: 23px;
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 12px;
  background: #f7f7f7; ;
`;

const Post = styled.div`
  width: 439px;
  height: 167px;
  background-color: #eaf5d3;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    position: absolute;
    margin-left: 300px;
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    p {
      margin-left: 4px;
      font-size: 17px;
    }
    span {
      margin: 0;
      font-size: 24px;
    }
  }

`;
