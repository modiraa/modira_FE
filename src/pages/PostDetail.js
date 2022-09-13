import styled from "styled-components";
import MapgpsForDetail from "../components/postdetail/MapgpsForDetail";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LowerNavbar from "../components/public/LowerNavbar";
import MyIcon from "../element/MyIcon";

function PostDetail() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params.postId.split(":")[1],"파람스")
  const [data, setData] = useState({
    category: "다같이 내자! N빵 모임",
    title: "Lorem ipsum dolor",
    date: "2022 / 6 /9",
    time: "오후 12시 00분",
    numberOfPeople: "2",
    menu: "일식",
    restaurantAddress: "서울특별시 마포구 땡땡로 00-0",
    latitude: "37.58667",
    longitude: "126.97611",
    writerProfileImage:
      "data:image/png;base64,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",
    writerNickname: "Lorem ipsum dolor",
    writerGender: "여성",
    writerAge: "20대",
    writerScore: "12",
    limitGender: "여성",
    limitAge: "10~20대",
    writerscore: "12",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id nam quis sodales. Eget lobortis neque mi,",
  });

  useEffect(() => {
    axios
      .get(`http://3.34.129.164/api/post/detail/${params.postId}`)
      .then((response) => {
        console.log("성공", response);
        setData(response.data);
      })
      .catch((error) => {
        console.log("에러", error);
      });
  }, []);

  const Submit = async () => {
    const ACCESS_TOKEN = sessionStorage.getItem("token");
    console.log(ACCESS_TOKEN);
    await axios
      .post(`http://3.34.129.164/api/enter/${data.roomId}`, null, {
        headers: {
          Authorization: ACCESS_TOKEN,
        },
      })
      .then((response) => {
        console.log("참여완료", response);
        alert("참여 되었습니다");
      })

      .catch((error) => {
        if (data.currentPeople < data.numberOfPeople) {
          alert("1개의 모임만 참여가능합니다.");
        }
        console.log("실패", error);
      });
  };
  return (
    <>
      <TitleBar>
        <Arrow
          onClick={() => {
            navigate(-1);
          }}
        >
          <MyIcon sizePx={28} iconName={"arrow_back_ios"} />
        </Arrow>
        <p>모임소개</p>
      </TitleBar>
      <Container>
        <InfoBox>
          <Category>{data.category}</Category>
          <Title>{data.title}</Title>
          <Date>
            <div>
              <MyIcon sizePx={20} iconName={"calendar_today"} color={"gray"} />
              <span style={{ marginLeft: "0.5rem" }}>{data.date}</span>
              <span>{data.time}</span>
            </div>
            <div>
              <div>
                <MyIcon sizePx={20} iconName={"person"} color={"gray"} />
                <span style={{ marginLeft: "0.5rem" }}>
                  {data.currentPeople}/{data.numberOfPeople}명 참여
                </span>
              </div>
              <div>
                <MyIcon sizePx={20} iconName={"ramen_dining"} color={"gray"} />
                <span style={{ marginLeft: "0.5rem" }}>{data.menu}</span>
              </div>
            </div>
          </Date>
        </InfoBox>
        <Address>
          <MyIcon sizePx={20} iconName={"place"} color={"gray"} />
          <p style={{ marginLeft: "0.5rem" }}>{data.restaurantAddress}</p>
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
            <b>{data.writerNickname}</b>
            <AgeGender>
              <span>{data.writerGender}</span>
              <span>{data.writerAge}</span>
            </AgeGender>
          </UserInfo>
          <Heart>
            <MyIcon sizePx={20} iconName={"favorite"} color={"beige"} />
            <b>{data.writerScore}</b>
          </Heart>
        </Writer>
        <Limit>
          <LimiitTitle>제한조건</LimiitTitle>
          <Limitcheck>
            <MyIcon sizePx={20} iconName={"task"} color={"green"} />
            <span>
              <b>
                {data.limitAge} {data.limitGender}
              </b>
              만 신청가능한 모임입니다.
            </span>
          </Limitcheck>
          <p>{data.contents}</p>
        </Limit>
        <ButtonSubmit onClick={Submit}>
          {data.currentPeople < data.numberOfPeople ? (
            <Join>참여신청</Join>
          ) : (
            <Finish>마감완료</Finish>
          )}
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
  width: 100%;
  height: auto;
  background-color: #fffcf6;
  
`;

const TitleBar = styled.div`
  width: 32.8125rem;
  height: 4.6875rem;
  font-size: 1.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    margin-left: 10.40625rem;
  }
`;

const Arrow = styled.span`
  display: flex;
  margin-left: 1.375rem;
  cursor: pointer;
`;
const Category = styled.b`
  font-size: 1.25rem;
  color: #ffbb31;
  font-weight: 500;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 2.0625rem;
  margin-top: 0.3125rem;
`;
const Date = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  color: #acacac;
  margin-top: 0.9375rem;
  div {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
  }
  span {
    margin-right: 1.125rem;
  }
`;
const InfoBox = styled.div`
  background-color: #fff;
  margin-top: 0.75rem;
  padding: 2rem 0 1.3125rem 2.675rem;
`;

const Address = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  font-size: 1.125rem;
  color: #acacac;
  padding: 0 0 1.1875rem 2.75rem;
  span {
    margin-right: 1.125rem;
  }
`;
const Gps = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height:auto;
  padding-bottom: 2.125rem;
 
`;
const Writer = styled.div`
  height: 7.375rem;
  background-color: #fffcf6;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 2.75rem 0 2.75rem 2.75rem;
`;

const Img = styled.img`
  width: 4.8125rem;
  height: 4.8125rem;
  border-radius: 0.625rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 3.125rem 0 1.6875rem;
  b {
    font-size: 1.25rem;
  }
`;

const AgeGender = styled.span`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.3125rem;
  span {
    width: 5.1875rem;
    height: 2.4375rem;
    background: #fff;
    border-radius: 4.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3125rem 0.5625rem 0 0;
    font-size: 1rem;
  }
`;
const Heart = styled.div`
  display: flex;
  align-items: center;
  width: 4.9375rem;
  height: 2rem;
  background: #fff;
  border-radius: 4.25rem;
  justify-content: center;
  padding: 0.25rem 0.875rem;
  b {
    font-size: 1.5625rem;
    margin-left: 0.125rem;
    margin-bottom: 0.1875rem;
  }

  span {
    font-weight: 400;
    margin-right: 0.5rem;
    color: #ffe9be;
  }
`;
const Limit = styled.div`
  position: relative;
  background-color: #fff;
  font-size: 1.125rem;
  padding: 2.3rem 2.75rem 0 2.75rem;

  span {
    margin: -0.1rem 0.5rem 1.375rem 0;
  }
  p {
    font-size: 1.25rem;
  }
  b {
    font-weight: 600;
    font-size: 1.125rem;
    margin-left: 0.5rem;
  }
`;

const Limitcheck = styled.div`
  display: flex;
  justify-items: center;
`;

const LimiitTitle = styled.div`
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

const ButtonSubmit = styled.div`
  position: relative;
  background-color: #fff;
`;
const Join = styled.button`
  background-color: #ffbb31;
  width: 27.8125rem;
  height: 4.375rem;
  border: none;
  color: white;
  padding: 0.75rem 1.5625rem;
  justify-content: center;
  font-size: 1.25rem;
  margin: 2.5rem 2.5rem 2.5rem 2.5rem;
  border-radius: 2.1875rem;
  cursor: pointer;
`;

const Finish = styled.button`
  background-color: #ffe4a8;
  width: 27.8125rem;
  height: 4.375rem;
  border: none;
  color: white;
  padding: 0.75rem 1.5625rem;
  justify-content: center;
  font-size: 1.25rem;
  margin: 2.5rem 2.5rem 2.5rem 2.5rem;
  border-radius: 2.1875rem;
`;
