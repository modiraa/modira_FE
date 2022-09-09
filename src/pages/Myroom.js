import styled from "styled-components";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/public/LowerNavbar";
import Navbar from "../components/public/Navbar";
import MiniBanner from "../image/MiniBanner.png";
import "../components/main/MainBanner.css";
import Enter1 from "../image/Enter1.png";

const MyRoom = () => {
  const navigate = useNavigate();
  const params = useParams();

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
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJleHAiOjE2NjI3OTM2NTEsInVzZXJuYW1lIjoiZ1NkUXFPZ1VfNVI1SnFNcGRVM1o0RzVLS01XX1J2VHJPU2FYYkJKT2NqcyJ9.I3R3ZELuVY7nz1mUQFbYj9hQ7r2D576H7yLcWpMGQbdxRK3_m1w0K_UVdnHh1XD-qfuEgTCX-Ok4RVYwRhHZ0w",
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
    removePost();
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
        console.log(params);
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
          <p>생성한 모임</p>
          <Post>
            {data ? (
              <MakedRoom>
                {" "}
                <span
                  className="material-symbols-outlined"
                  onClick={removePost}
                  style={{ color: "#FFF" }}
                >
                  delete<p>게시물 삭제</p>
                </span>
                <img
                  src={data?.menuForImage}
                  onClick={() => {
                    navigate(`/postdetail${data.postId}`);
                  }}
                />
              </MakedRoom>
            ) : (
              <ToMakeRoom
                onClick={() => {
                  navigate("/write");
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  add_circle
                </span>
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
                    navigate(`/postdetail${data.postId}`);
                  }}
                />
              </MakedRoom>
            ) : (
              <ToMakeRoom
                onClick={() => {
                  navigate("/morepost");
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  add_circle
                </span>
                <p>모임 찾아보러 가기</p>
              </ToMakeRoom>
            )}
          </Post>
          <Title>{joinData?.title}</Title>
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
  font-size: 26px;
  width: 525px;
  background-color: #fff;
  margin-bottom: 12px;
`;

const Title = styled.div`
  margin: 9px 0 38px 0;
  font-size: 23px;
  font-weight: 500;
`;

const Minibanner = styled.div`
  height: 153px;
  background-image: url(${MiniBanner});
  background-size: contain;
  font-size: 19px;
  p {
    margin-top: 15px;
  }
`;

const CreateRoom = styled.div`
  margin: 29px 43px 20px 43px;
  p {
    margin-bottom: 19px;
    font-size: 26px;
    font-weight: 700;
  }
  div {
    font-size: 23px;
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 12px;
  background: #fffcf6;
`;

const Post = styled.div`
  width: 439px;
  height: 167px;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  background-color: #fffcf6;
  cursor: pointer;
  img {
    object-fit: cover;
    width: 439px;
    height: 167px;
    border-radius: 12px;
    position: absolute;
    z-index: 1;
  }
`;

const MakedRoom = styled.div`
  width: 439px;
  height: 167px;
  background-size: contain;
  display: flex;
  flex-direction: row;

  span {
    z-index: 2;
    margin-left: 305px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 9px;
    height: 36px;
    width: 126px;
    background: rgba(255, 187, 49, 0.6);
    border-radius: 22px;
    p {
      margin-left: 4px;
      font-weight: 500;
      font-size: 13px;
      margin-top: 19px;
      color: #ffffff;
      align-items: center;
    }
  }
`;

const ToMakeRoom = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 439px;
  height: 167px;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  padding-top: 10px;
  span {
    font-size: 25px;
    color: #ffbb31;
  }
  p {
    margin-top: 15px;
    color: #ffbb31;
    font-size: 20px;
  }
`;
