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

  const getPost = async () => {
    await axios
      .get("http://3.39.23.189/api/myposts", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJleHAiOjE2NjE0MzU4ODMsInVzZXJuYW1lIjoiS2FrYW9uYW1lMjM4OTc0OTcyNCJ9.VWam7rKmlsWlLFCYSblyZ_0W0qId0HVXtoIVE9-_IhX91rX0Gbwv7d65Uudo5sqqAL1ntCVpQha_lAP6evi5JA",
        },
      })
      .then((response) => {
        setData(response.data[0]);
        console.log("데이터 나와랏", response.data[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);

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
              <span>게시물 삭제</span>
            </div>
            <img src={data.menuForImage} />
          </Post>
          <div>{data.title}</div>
        </CreateRoom>
        <BorderLine />
        <CreateRoom>
          <p>신청한 모임</p>
          <Post
            onClick={() => {
              navigate("/postdetail:postId");
            }}
          >
            <img src={data.menuForImage} />
          </Post>
          <div>{data.title}</div>
        </CreateRoom>
      </Container>
      <LowerNavbar />
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
  margin: 29px 43px 0 43px;
  p {
    margin-bottom: 19px;
    font-size: 26px;
  }
  div {
    margin: 9px 0 24px 0;
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
  background-color: #e2e2e2;
  border-radius: 12px;
  margin: 0;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    display: flex;
    position: absolute;
    margin-left: 300px;
    justify-content: center;
    align-items: center;
  }
  p {
    margin-left: 4px;
  }
  span {
    margin: 0;
    font-size: 17px;
  }
`;
