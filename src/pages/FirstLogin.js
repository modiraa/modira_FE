import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const FirstLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  //https://velog.io/@jahommer/React-%EA%B2%80%EC%83%89%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0
  // 밀착:https://github.com/hanghae99-MEALCHAK/MEALCHAK-client-application/blob/main/src/pages/ProfileEdit.js
  //이미지 업로드
  const [MyProfileImg, SetProfileImg] = React.useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );
  const [ImgForServerType, SetImgForServerType] = React.useState(null);
  const profileImage = React.useRef(null);
  // 검색창에 검색어 변화
  const [nickName, setNickName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [address, setAddress] = React.useState("");

  // const register = ()

  const PreviewProfileImg = (e) => {
    SetProfileImg(URL.createObjectURL(e.target.files[0]));
    SetImgForServerType(e.target.files[0]);
    console.log(ImgForServerType);
  };
  const ImageUpload = () => {
    profileImage.current.click();
  };

  const Submit = async () => {
    await axios
      .post(
        "http://52.79.223.9/api/user/signup",
        JSON.stringify({
          nickname: nickName,
          username: "text",
          // profileImage: "",
          age: age,
          gender: gender,
          address: location.state.homesi+location.state.homegu
        }),
        {
          headers: { "Content-Type": `application/json` },
        }
      )
      .then((response) => {
        console.log("회원가입 완료", response.data.user);
        alert("가입성공");
        // navigate("/login");
      })
      .catch((error) => {
        console.log("에러!", error);
      });
    // console.log({nickName,age,gender,address})
  };

  return (
    <Container>
      <Box>
        {" "}
        <button style={{ display: "left" }}>뒤로가기</button>
        <input
          type="file"
          ref={profileImage}
          accept="image/*"
          style={{ display: "none" }}
          onChange={PreviewProfileImg}
        />
        <Imgset>
          <Img src={MyProfileImg} />
        </Imgset>
        <ButtonImg onClick={ImageUpload}>프로필 선택</ButtonImg>
      </Box>
      <LoginBox>
        <InputBox>
          <p>이름</p>
          <Input
            type="text"
            name="userName"
            defaultValue="김아무개"
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          ></Input>
        </InputBox>
        <InputBox>
          {" "}
          <p>전화번호 </p>
          <Input
            type="text"
            name="phoneNumber"
            defaultValue="010.1234.5678"
          ></Input>
        </InputBox>
        <InputBox>
          <p>닉네임 </p>
          <Input
            type="text"
            name="nickName"
            placeholder="3~6자 이내로 입력해주세요."
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
          ></Input>
        </InputBox>
        <InputBox>
          <p>나이대 </p>
          <select
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          >
            <option value={"10대"} defaultChecked>
              10대
            </option>
            <option value={"20대"}>20대</option>
            <option value={"30대"}>30대</option>
          </select>
        </InputBox>
        <InputBox>
          <p>성별 </p>
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value={"여성"} defaultChecked>
              여성
            </option>
            <option value={"남성"}>남성</option>
          </select>
        </InputBox>

        <div
          onClick={() => {
            navigate("/inputaddress");
          }}
        >
          주소
          <span>{(location?.state?.homesi)} </span>
          <span>{(location?.state?.homegu)} </span>
        </div>
        <label>
          <input type="checkbox" />
          (필수) 개인정보 취급방침에 동의합니다.
        </label>
        <div>보기</div>
        <ButtonSubmit onClick={Submit}>등록완료</ButtonSubmit>
      </LoginBox>
    </Container>
  );
};

export default FirstLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const Box = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #e7e7e7;
`;

const LoginBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5%;
  background-color: white;
`;

const InputBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #a4a4a4;
  border-radius: 12px;
  padding: 10px;
  margin-left: 20px;
  /* &:focus {
    outline: none;
  } */
`;
const ButtonSubmit = styled.button`
  background: #222222;
  color: #ffffff;
  border-radius: 68px;
  cursor: pointer;
`;

const ButtonImg = styled.button`
  background: #737373;
  color: #ffffff;
  border-radius: 68px;
  cursor: pointer;
`;

const Imgset = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 25px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
