import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/public/LowerNavbar";
import Navbar from "../components/public/Navbar";
import MiniBanner from "../image/MiniBanner.png";
import "../components/main/MainBanner.css";
import Enter1 from "../image/Enter1.png";
import MyIcon from "../element/MyIcon";

const MyRoom = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    postId: "id",
    title: "Lorem ipsum dolor1",
    menuForImage: { Enter1 },
    menu: "피자",
  });

  const [joinData, setJoinData] = useState({
    postId: "id",
    title: "Lorem ipsum dolor2",
    menuForImage: { Enter1 },
    menu: "치킨",
  });

  const getPost = () => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    console.log(ACCESS_TOKEN);

    // 생성한 모임
    axios
      .get("http://3.34.129.164/api/myposts", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        console.log("데이터 나와랏", response.data[0]);
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });

    // 참여한 모임
    axios
      .get("http://3.34.129.164/api/myjoin", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        console.log("데이터 나와랏", response.data[0]);
        setJoinData(response.data[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };
  useEffect(() => {
    getPost();
    // removePost();
  }, []);

  //모임 삭제
  const removePost = async () => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    await axios
      .delete(`http://3.34.129.164/api/post/${data.postId}`, {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        console.log("삭제", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };

  return (
    <>
      <Navbar />
      <BorderLine />
      <Container>
        <Minibanner>
          <div className="mainbanner-wrap-logoAndtext">
            <div className="mainbanner-logo"></div>
            <p>
              이제 <b>혼밥</b>하지 마세요!
              <br />
              <b>밥 친구 찾기 플랫폼</b>{" "}
              <span className="font-color">modira</span>
            </p>
          </div>
        </Minibanner>
        <CreateRoom>
          <p>생성한 모임</p>{" "}
          <Post>
            {data ? (
              <MakedRoom>
                <img
                  src={data?.menuForImage}
                  onClick={() => {
                    navigate(`/postdetail${data.postId}`);
                  }}
                />
                <span onClick={removePost}>
                  <MyIcon
                    sizePx={15}
                    iconName={"delete_white"}
                    color={"white"}
                  />
                  게시물 삭제
                </span>
              </MakedRoom>
            ) : (
              <ToMakeRoom
                onClick={() => {
                  navigate("/write");
                }}
              >
                <MyIcon sizePx={25} iconName={"add_circle"} color={"orange"} />
                <p>새 모임 만들러 가기</p>
              </ToMakeRoom>
            )}
          </Post>
          <Title>{data?.title}</Title>
        </CreateRoom>
        <BorderLine />
        <CreateRoom>
          <p>신청한 모임</p>
          <Post>
            {joinData ? (
              <MakedRoom>
                <img
                  src={joinData?.menuForImage}
                  onClick={() => {
                    navigate(`/postdetail${joinData?.postId}`);
                  }}
                />
              </MakedRoom>
            ) : (
              <ToMakeRoom
                onClick={() => {
                  navigate("/");
                }}
              >
                <MyIcon sizePx={25} iconName={"add_circle"} color={"orange"} />
                <p>모임 찾아보러 가기</p>
              </ToMakeRoom>
            )}
          </Post>
          <Title>{joinData?.title}</Title>
        </CreateRoom>
      </Container>
      <div className="lowernavbar">
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
  font-size: 1.625rem;
  width: 32.8125rem;
  background-color: #fff;
  margin-bottom: 0.75rem;
`;

const Title = styled.div`
  margin: 0.5625rem 0 2.375rem 0;
  font-size: 1.4375rem;
  font-weight: 600;
`;

const Minibanner = styled.div`
  height: 9.5625rem;
  background-image: url(${MiniBanner});
  background-size: contain;
  font-size: 1.1875rem;
  p {
    margin-top: 0.9375rem;
  }
`;

const CreateRoom = styled.div`
  margin: 1.8125rem 2.6875rem 1.25em 2.6875rem;
  p {
    margin-bottom: 1.1875rem;
    font-size: 1.625rem;
    font-weight: 700;
  }
  div {
    font-size: 1.4375rem;
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 12px;
  background: #fffcf6;
`;

const Post = styled.div`
  width: 27.4375rem;
  height: 10.4375rem;
  border-radius: 0.75rem;
  border: none;
  overflow: hidden;
  background-color: #fffcf6;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 27.4375rem;
    height: 10.4375rem;
    border-radius: 0.75rem;
    position: relative;
    z-index: 1;
  }
`;

const MakedRoom = styled.div`
  width: 27.4375rem;
  height: 10.4375rem;
  background-size: contain;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  font-size: 0.8125rem;
  font-weight: 600;
  span {
    position: absolute;
    z-index: 2;
    width: 6.25rem;
    height: 1.5625rem;
    font-size: 0.8125rem;
    margin-left: 20.5rem;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(255, 187, 49, 0.6);
    border-radius: 1.375rem;
  }
`;

const ToMakeRoom = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 27.4375rem;
  height: 10.4375rem;
  border-radius: 0.75rem;
  border: none;
  overflow: hidden;
  padding-top: 3.125rem;
  p {
    margin-top: 0.9375rem;
    color: #ffbb31;
    font-size: 1.25rem;
  }
`;
