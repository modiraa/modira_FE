import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";
import Navbar from "../components/Navbar";

const Myroom = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    postId: "id",
    title: "Lorem ipsum dolor",
    menuForImage: "치킨이미지",
    menu: "치킨",
  });
  console.log("여기확인", data);

  // const getPost = async () => {
  //   const ACCESS_TOKEN = sessionStorage.getItem("token");
  //   console.log(ACCESS_TOKEN);

  //   await axios
  //     .get("http://3.34.129.164/api/myposts", {
  //       headers: {
  //         Authorization: ACCESS_TOKEN,
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data[0]);
  //       console.log("데이터 나와랏", response.data[0]);
  //     })
  //     .catch((error) => {
  //       console.log("에러", error);
  //     });
  // };
  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <>
      <Navbar />
      <BorderLine />
      <Container>
        <Minibanner>
          <p>미니배너</p>
        </Minibanner>
        <CreateRoom>
          <p>생성한 모임</p>
          <Post
            onClick={() => {
              navigate("/postdetail:postId");
            }}
          >
            <div>
              <span className="material-symbols-outlined">delete</span>
              <p>게시물 삭제</p>
            </div>
           
          </Post>
          <Title>{data.title}</Title>
        </CreateRoom>
        <BorderLine />
        <CreateRoom>
          <p>신청한 모임</p>
          <Post
            onClick={() => {
              navigate("/postdetail:postId");
            }}
          >
            <div>
              {data.menuForImage ? (
                <span>{data.menuForImage} </span>
              ) : (
                <div>
                  <div>
                    <span className="material-symbols-outlined">add</span>
                  </div>
                  <div> 모임 만들러 가기</div>
                </div>
              )}{" "}
            </div>
          </Post>
          <Title>{data.title}</Title>
        </CreateRoom>
      </Container>
      <div className="main-wrap-lowernavbar">
        <LowerNavbar locationIndicator={"myroom"} />
      </div>
    </>
  );
};
export default Myroom;

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
  width: 100%;
  height: 126px;
  background: #e2e2e2;
  margin-top: 15px;
  p {
    font-size: 25px;
    display: flex;
    justify-content: center;
  }
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
  background-color: #d9d9d9;
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
  }
  p {
    margin-left: 4px;
    font-size: 17px;
  }
  span {
    margin: 0;
    font-size: 24px;
  }
`;
