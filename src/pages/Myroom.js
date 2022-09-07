import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";
import Navbar from "../components/Navbar";
import MiniBanner from "../image/MiniBanner.png";
import "../css(subin)/MainBanner.css";
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
    menuForImage: "치킨이미지",
    menu: "치킨",
  });

  const getPost = async () => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    console.log(ACCESS_TOKEN);

    // 생성한 모임
    await axios
      .get("http://3.34.129.164/api/myposts", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        setData(response.data[0]);
        console.log("데이터 나와랏", response.data[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });

    // 참여한 모임
    await axios
      .get("http://3.34.129.164/api/myjoin", {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        setJoinData(response.joindata[0]);
        console.log("데이터 나와랏", response.joindata[0]);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  };
  useEffect(() => {
    getPost();
  }, []);

  //모임 삭제
  const removePost = async () => {
    await axios
      .delete("http://3.34.197.6/api/post/{postId}")
      .then((response) => {
        setData(response.data);
        console.log("삭제");
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
          <p>생성한 모임</p>
          <Post>
            {data ? (
              <MakedRoom>
                {" "}
                <span
                  className="material-symbols-outlined"
                  onClick={removePost}
                >
                  delete<p>게시물 삭제</p>
                </span>
                <img
                  src={data?.menuForImage}
                  onClick={() => {
                    navigate(`/postdetail${params.postId}`);
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
            {data ? (
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
            ) : (
              <MakedRoom>
                <img src={joinData?.menuForImage} />
              </MakedRoom>
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
    margin-left: 315px;
    font-size: 23px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
    height: 25px;

    p {
      margin-left: 4px;
      font-size: 17px;
      margin-top: 3px;
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
