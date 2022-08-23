import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AgeDropdown from "../components/AgeDropdown";

const FirstLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  //이미지 업로드
  const [ProfileImg, SetProfileImg] = React.useState(
    "data:image/png;base64,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"
  );
  const [ImgForServerType, SetImgForServerType] = React.useState(null);
  const userProfileImage = React.useRef("");
  // 검색창에 검색어 변화
  const [nickName, setNickName] = React.useState("");
  const [age, setAge] = React.useState("선택하기");
  const [gender, setGender] = React.useState("");
  const [address, setAddress] = React.useState("");

  // const register = ()

  const PreviewProfileImg = (e) => {
    const correctForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
    if (e.target.files[0]?.size > 3 * 1024 * 1024) {
      alert("파일 사이즈는 3MB까지만 가능합니다.");
      return;
    } else if (!e.target?.files[0]?.name.match(correctForm)) {
      alert("이미지 파일만 가능합니다.");
      return;
    }

    SetProfileImg(URL.createObjectURL(e.target.files[0]));
    SetImgForServerType(e.target.files[0]);
    // console.log(ImgForServerType);
    console.log(" 확인", URL.createObjectURL(e.target.files[0]));
  };
  const ImageUpload = () => {
    userProfileImage.current.click();
  };

  // 클릭시 state에 저장한다. 여자:0, 남자:1
  const selectGender = (gender) => {
    setGender(gender);
  };

  const Submit = async () => {
    console.log(ImgForServerType);

    const formData = new FormData();
    formData.append("userProfileImage", ImgForServerType);
    formData.append("nickname", nickName);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("address", location.state.homesi + location.state.homegu);
    formData.append("username", "text");

    // await axios
    //   .post("http://52.79.223.9/api/user/register", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((response) => {
    //     console.log("회원가입 완료", response);
    //     alert("가입성공");
    //     // navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.log("에러!", error);
    //   });
    // console.log({ userProfileImage, nickName, age, gender, address });
  };

  return (
    <Container>
      <Box>
        {" "}
        <Arrow
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Arrow>
        <input
          type="file"
          ref={userProfileImage}
          accept="image/*"
          style={{ display: "none" }}
          onChange={PreviewProfileImg}
        />
        <Imgset>
          <Img src={ProfileImg} />
        </Imgset>
        <ButtonImg onClick={ImageUpload}>+ 프로필 사진추가</ButtonImg>
      </Box>
      <LoginBox>
        <p>닉네임 </p>
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
        <p>나이대 </p>
        <InputBox>
          <AgeDropdown age={age} setAge={setAge} />
        </InputBox>
        <p>성별 </p>
        <InputBox>
          <GenderButton
            onClick={() => {
              selectGender("여성");
            }}
            color={gender === "여성" ? "#fff" : "#A4A4A4"}
            bg={gender === "여성" ? "#A4A4A4;" : "#fff"}
            border={gender === "여성" ? "1px solid gray" : "1px solid #C4C4C4"}
          >
            여성
          </GenderButton>
          <GenderButton
            onClick={() => {
              selectGender("남성");
            }}
            color={gender === "남성" ? "#fff" : "#A4A4A4"}
            bg={gender === "남성" ? "#A4A4A4;" : "#fff"}
            border={gender === "남성" ? "1px solid gray" : "1px solid #C4C4C4"}
          >
            남성
          </GenderButton>
        </InputBox>
        <p>주소</p>
        <InputBox
          onClick={() => {
            navigate("/inputaddress");
          }}
        >
          <Address placeholder="주소 검색">
            <span>{location?.state?.homesi} </span>
            <span>{location?.state?.homegu} </span>
          </Address>
        </InputBox>
        <Check>
          <input type="checkbox" />
          <p>(필수) 개인정보 취급방침에 동의합니다.</p>
          <div>
            <span>보기 </span>
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </div>
        </Check>
        <Button onClick={Submit}>
          <button>등록완료</button>
        </Button>
      </LoginBox>
    </Container>
  );
};

export default FirstLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 525px;
  background-color: #fff;
`;

const Box = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 251px;
  margin-top: 43px;
  background-color: #e7e7e7;

  span {
    cursor: pointer;
    font-size: 36px;
    display: flex;
    flex-direction: row;
  }
`;

const Arrow = styled.div`
  position: relative;
  top: 20px;
  left: -200px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 43px 0 43px;
  background-color: white;
  p {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 439px;
  height: 100%;
  margin-bottom: 29px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 29px;
  font-family: "AppleSDGothicNeoM00";
  color: #dfdfdf;
  font-size: 20px;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Imgset = styled.div`
  border-radius: 50px;
  overflow: hidden;
  width: 116px;
  height: 116px;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonImg = styled.div`
  background-color: #525252;
  width: 197px;
  height: 40px;
  border: none;
  color: white;
  padding: 5px 25px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  margin: 8px 0 31px 0;
  border-radius: 35px;
  cursor: auto;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  padding-left: 29px;
  width: 100%;
  height: 54px;
  font-family: "AppleSDGothicNeoM00";
  color: #dfdfdf;
  font-size: 20px;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const GenderButton = styled.div`
  width: 213px;
  height: 54px;
  font-family: "AppleSDGothicNeoM00";
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 12px;
  cursor: pointer;
`;

const Button = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  button {
    background-color: #222222;
    width: 439px;
    height: 70px;
    border: none;
    color: white;
    padding: 12px 25px;
    text-align: center;
    font-size: 20px;
    margin-top: 60px;
    border-radius: 35px;
    cursor: auto;
  }
`;

const Check = styled.span`
  display: flex;
  align-items: center;
  font-family: "Inter";
  input {
    margin-right: 15px;
    width: 19px;
    height: 19px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    margin: 0 29px 0 0;
  }
  span {
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
