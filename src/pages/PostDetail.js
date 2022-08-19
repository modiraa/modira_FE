import styled from "styled-components";
import MapgpsForDetail from "../components/MapgpsForDetail";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/Navbar";

function PostDetail() {
  const [data, setData] = useState({});
  console.log(data);
  // const navigate = useNavigate();
  // let location = useLocation();
  // const params = useParams();

  useEffect(() => {
    axios
      .get("http://3.34.129.164/api/post/detail/10")
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
        <Arrow className="material-symbols-outlined">arrow_back_ios</Arrow>
        <p>모임소개</p>
      </TitleBar>
      <Container>
        <InfoBox>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
          <Date>
            <span className="material-symbols-outlined">calendar_today</span>
            <p>{data.date}</p>
            <span className="material-symbols-outlined">person</span>
            <p>{data.numberOfPeople}</p>
            <p>{data.menu}</p>
          </Date>
        </InfoBox>
        <Address>
          <span className="material-symbols-outlined">location_on</span>
          <p>서울특별시 마포구 땡땡로</p>

          <Gps>지도 Gps</Gps>
        </Address>
        {/* <div>{data.limitGender}</div>
        <div>{data.limitAge}</div> */}
        <Writer>
          <UserImg>
            <Img src={data.writerProfileImage} />
          </UserImg>
          <UserInfo>
            <NickName>{data.writerNickname}</NickName>
            <AgeGender>
              <span>{data.writerGender}</span>
              <span>{data.writerAge}</span>
            </AgeGender>
          </UserInfo>
          <Heart>
            <span className="material-symbols-outlined">favorite</span> 12
          </Heart>
        </Writer>
        <Limit>
          <h3>제한조건</h3>
          <span className="material-symbols-outlined">task_alt</span>
          <span>{data.limitAge}</span>
          <span>{data.limitGender}</span>
          <div>{data.contents}</div>
        </Limit>
        <ButtonSubmit>참여신청</ButtonSubmit>
      </Container>
    </>
  );
}

export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDGothicNeoB00";
  width: 100%;
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
`;
const Category = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 31px;
`;
const Date = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #9a9a9a;
  flex-direction: row;
  display: flex;
  p {
    margin-right: 44px;
  }
`;
const InfoBox = styled.div`
  background-color: #fff;
  margin-top: 12px;
  padding: 44px 0 44px 44px;
`;

const Address = styled.div`
  background-color: #fff;
  font-weight: 400;
  font-size: 18px;
  p{

  }
`;
const Gps = styled.div`
  width: 100%;
  height: 184px;
`;
const Writer = styled.div`
  margin-top: 34px;
  height: 119px;
  background-color: #f8f8f8;
  padding: 43px 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserImg = styled.span``;

const Img = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const NickName = styled.p`
  font-weight: 400;
  font-size: 20px;
`;
const AgeGender = styled.span`
  font-weight: 400;
  font-size: 16px;
`;
const Heart = styled.span``;
const Limit = styled.div`
  span {
    display: flex;
    flex-direction: row;
  }
`;
const ButtonSubmit = styled.button`
  background-color: black;
  width: 445px;
  height: 70px;
  border: none;
  color: white;
  padding: 12px 25px;
  justify-content: center;
  font-size: 0.9rem;
  margin: 56px 40px 85px 40px;
  border-radius: 35px;
  cursor: auto;
`;
