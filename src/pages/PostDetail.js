import styled from "styled-components";
import MapgpsForDetail from "../components/MapgpsForDetail";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/LowerNavbar";

function PostDetail() {
  const navigate = useNavigate();
  let { postId } = useParams();
  console.log("여기확인", postId);

  const [data, setData] = useState({
    category: "N빵 모임 (모임 카테고리)",
    title: "Lorem ipsum dolor",
    date: "6월 9일",
    time: "AM12:00",
    numberOfPeople: "2",
    menu: "일식",
    restaurantAddress: "서울특별시 마포구 땡땡로 00-0",
    latitude: "35.8706072114037",
    longitude: "128.598955620405",
    writerProfileImage:
      "data:image/png;base64,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",
    writerNickname: "Lorem ipsum dolor",
    writerGender: "여성",
    writerAge: "20대",
    writerScore: "12",
    limitGender: "여성",
    limitAge: "20대",
    writerscore: "12",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id nam quis sodales. Eget lobortis neque mi,",
  });

  useEffect(() => {
    axios
      .get("http://3.34.129.164/api/post/detail/`${postId}`")
      .then((response) => {
        setData(response.data);
        console.log("성공", response.data);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  }, []);

  return (
    <>
      <TitleBar>
        <Arrow
          onClick={() => {
            navigate("/");
          }}
          className="material-symbols-outlined"
        >
          arrow_back_ios
        </Arrow>
        <p>모임소개</p>
      </TitleBar>
      <Container>
        <InfoBox>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
          <Date>
            <span className="material-symbols-outlined">calendar_today</span>
            <span>
              <span>{data.date}</span>
              <span>{data.time}</span>
            </span>
            <span className="material-symbols-outlined">person</span>
            <p>{data.numberOfPeople}명 참여</p>
            <span className="material-symbols-outlined">ramen_dining</span>
            <p>{data.menu}</p>
          </Date>
        </InfoBox>
        <Address>
          <span className="material-symbols-outlined">location_on</span>
          <p>{data.restaurantAddress}</p>
        </Address>
        <Gps>
          <MapgpsForDetail
            latitude={data.latitude}
            longitude={data.longitude}
          />
        </Gps>
        <Writer>
          <Img src={data.writerProfileImage} />
          <UserInfo>
            <p>{data.writerNickname}</p>
            <AgeGender>
              <span>{data.writerGender}</span>
              <span>{data.writerAge}</span>
            </AgeGender>
          </UserInfo>
          <Heart>
            <span className="material-symbols-outlined">favorite</span>{" "}
            <p>{data.writerScore}</p>
          </Heart>
        </Writer>
        <Limit>
          <p>제한조건</p>
          <div>
            <span className="material-symbols-outlined">task_alt</span>
            <span>
              <b>
                {data.limitAge}
                {data.limitGender}
              </b>
              만 신청가능한 모임입니다.
            </span>
          </div>
          <p>{data.contents}</p>
        </Limit>
        <ButtonSubmit>
          {/* {location.state?.homesi ? (
            <button>참여신청</button>
            ) : ( */}
          <button>마감완료</button>
          {/* )} */}
        </ButtonSubmit>
      </Container>
      <LowerNavbar />
    </>
  );
}

export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDGothicNeoB00";
  width: 525px;
  background-color: #f1f1f1;
`;

const TitleBar = styled.div`
  width: 525px;
  height: 75px;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  p {
    margin-left: 166.5px;
  }
`;

const Arrow = styled.span`
  display: flex;
  margin-left: 22px;
  cursor: pointer;
`;
const Category = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 31px;
  margin-bottom: 5px;
`;
const Date = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  color: #9a9a9a;
  span {
    margin-right: 8px;
  }
  p {
    margin-right: 18px;
  }
`;
const InfoBox = styled.div`
  background-color: #fff;
  margin-top: 12px;
  padding: 44px 0 44px 44px;
`;

const Address = styled.span`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding: 0 0 19px 44px;
  span {
    margin-right: 8px;
  }
`;
const Gps = styled.div`
  width: 100%;
  height: 218px;
  background-color: #fff;
`;
const Writer = styled.div`
  height: 119px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 44px 0 44px 44px;
`;

const Img = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 117px 0 27px;
  p {
    font-weight: 400;
    font-size: 20px;
  }
`;

const AgeGender = styled.span`
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  span {
    width: 83px;
    height: 39px;
    background: #f1f1f1;
    border-radius: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 9px 0 0;
  }
`;
const Heart = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 25px;
    margin-left: 2px;
  }
  span {
    font-size: 20px;
  }
`;
const Limit = styled.div`
  position: relative;
  background-color: #fff;
  font-weight: 400;
  font-size: 18px;
  padding: 44px 0 0 44px;
  span {
    margin: 0 8px 22px 0;
  }
  p {
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 20px;
  }
  b {
    font-weight: 700;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const ButtonSubmit = styled.div`
  position: relative;
  background-color: #fff;
  button {
    background-color: black;
    width: 445px;
    height: 70px;
    border: none;
    color: white;
    padding: 12px 25px;
    justify-content: center;
    font-size: 20px;
    margin: 56px 40px 85px 40px;
    border-radius: 35px;
    cursor: pointer;
  }
`;
