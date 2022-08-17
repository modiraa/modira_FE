import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AgeDropdown from "../components/AgeDropdown";

const FirstLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  //https://velog.io/@jahommer/React-%EA%B2%80%EC%83%89%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0
  // 밀착:https://github.com/hanghae99-MEALCHAK/MEALCHAK-client-application/blob/main/src/pages/ProfileEdit.js
  //이미지 업로드
  const [MyProfileImg, SetProfileImg] = React.useState(
    "data:image/png;base64,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"
  );
  const [ImgForServerType, SetImgForServerType] = React.useState(null);
  const userProfileImage = React.useRef("");
  // 검색창에 검색어 변화
  const [nickName, setNickName] = React.useState("");
  const [age, setAge] = React.useState("선택하기");
  const [gender, setGender] = React.useState("");

  // const register = ()

  const PreviewProfileImg = (e) => {
    SetProfileImg(URL.createObjectURL(e.target.files[0]));
    SetImgForServerType(e.target.files[0]?.size > 5);
    console.log(ImgForServerType);
  };
  const ImageUpload = () => {
    userProfileImage.current.click();
  };

  // 클릭시 state에 저장한다. 여자:0, 남자:1
  const selectGender = (gender) => {
    setGender(gender);
  };

  const Submit = async () => {
    const userdata = {
      userProfileImage: MyProfileImg,
      nickname: nickName,
      age: age,
      gender: gender,
      address: location.state.homesi + location.state.homegu,
    };
    console.log("회원가입 정보", userdata);
    console.log(ImgForServerType);

    const formData = new FormData();
    formData.append("userProfileImage", ImgForServerType);
    formData.append("nickname", nickName);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("address", location.state.homesi + location.state.homegu);
    formData.append("username", "text");

    await axios
      .post("http://52.79.223.9/api/user/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("회원가입 완료", response);
        alert("가입성공");
        // navigate("/login");
      })
      .catch((error) => {
        console.log("에러!", error);
      });
    // console.log({ userProfileImage, nickName, age, gender, address });
  };

  return (
    <Container>
      <Box>
        {" "}
        <button
          style={{ display: "left" }}
          onClick={() => {
            navigate("/inputaddress");
          }}
        >
          뒤로가기
        </button>
        <input
          type="file"
          ref={userProfileImage}
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
        <P>닉네임 </P>
        <InputBox>
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
        <P>나이대 </P>
        <InputBox>
          <AgeDropdown age={age} setAge={setAge} />
        </InputBox>
        <P>성별 </P>
        <InputBox>
          <GenderButton
            onClick={() => {
              selectGender("여성");
            }}
            color={gender === "여성" ? "#fff" : "#8B8B8B"}
            bg={gender === "여성" ? "#8B8B8B;" : "#fff"}
            border={gender === "여성" ? "1px solid gray" : "1px solid #C4C4C4"}
          >
            여성
          </GenderButton>
          <GenderButton
            onClick={() => {
              selectGender("남성");
            }}
            color={gender === "남성" ? "#fff" : "#8B8B8B"}
            bg={gender === "남성" ? "#8B8B8B;" : "#fff"}
            border={gender === "남성" ? "1px solid gray" : "1px solid #C4C4C4"}
          >
            남성
          </GenderButton>
        </InputBox>
        <P>주소</P>
        <InputBox
          onClick={() => {
            navigate("/inputaddress");
          }}
        >
          <Address placeholder="주소검색">
            <span>{location?.state?.homesi} </span>
            <span>{location?.state?.homegu} </span>
          </Address>
        </InputBox>
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
  width: 100%;
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
  margin: 30px;
  padding-top: 5%;
  background-color: white;
`;
const P = styled.div`
  text-align: left;
  font-weight: 800;
`;

const InputBox = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 15px;
  padding: 13px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const ButtonSubmit = styled.button`
  background-color: #b8b8b8;
  width: 70%;
  height: auto;
  border: none;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 25px;
  border-radius: 35px;
  cursor: auto;
`;

const Imgset = styled.div`
  border-radius: 50px;
  overflow: hidden;
  width: 80px;
  height: 80px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonImg = styled.button`
  background-color: #b8b8b8;
  width: 35%;
  height: 33px;
  border: none;
  color: white;
  padding: 5px 25px;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 8px;
  border-radius: 35px;
  cursor: auto;
`;

const Address = styled.div`
  width: 100%;
  height: 15px;
  padding: 13px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #a4a4a4;
  border-radius: 12px;
  cursor: pointer;
`;

const GenderButton = styled.div`
  width: 150px;
  height: 15px;
  padding: 13px 30px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 12px;
  cursor: pointer;
`;
