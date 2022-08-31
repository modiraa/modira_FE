import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import AgeDropdown from "../components/AgeDropdown";
import { loginUserinfo } from "../redux/moduls/UserInfo";
import Profilebg from "../image/Profilebg.png";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeUserInfo = useSelector((state) => state.UserInfo);

  console.log(storeUserInfo);

  //카카오 토큰 서버에 받아서 넘기기
  let location = useLocation();
  const username = location.state?.username;
  //지도 api 주소 값 가져오기
  const home = `${location.state?.homesi} ${location.state?.homegu}`;
  console.log(home, "주소확인");

  //이미지 업로드
  const [ProfileImg, SetProfileImg] = React.useState("");
  const [userProfileImage, setUserProfileImage] = React.useState("");
  const userProfileImageRef = React.useRef("");
  // 검색창에 검색어 변화
  const [nickName, setNickName] = React.useState("");
  const [age, setAge] = React.useState("선택하기");
  const [gender, setGender] = React.useState("");
  const [address, setAddress] = React.useState("");

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
    setUserProfileImage(e.target.files[0]);
    console.log(" 이미지확인", URL.createObjectURL(e.target.files[0]));
  };
  const ImageUpload = () => {
    userProfileImageRef.current.click();
  };

  // 클릭시 state에 저장한다. 여자:0, 남자:1
  const selectGender = (gender) => {
    setGender(gender);
  };

  useEffect(() => {
    if (storeUserInfo?.userProfileImage !== "") {
      setUserProfileImage(storeUserInfo?.userProfileImage);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

  useEffect(() => {
    console.log("storage값 확인", storeUserInfo?.nickName, storeUserInfo);
    if (storeUserInfo?.nickName !== "") {
      setNickName(storeUserInfo?.nickName);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

  useEffect(() => {
    console.log("storage값 확인", storeUserInfo?.age, storeUserInfo);
    if (storeUserInfo?.age !== "") {
      setAge(storeUserInfo?.age);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

  useEffect(() => {
    console.log("storage값 확인", storeUserInfo?.gender, storeUserInfo);
    if (storeUserInfo?.gender !== "") {
      setGender(storeUserInfo?.gender);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

  useEffect(() => {
    console.log("storage값 확인", storeUserInfo?.home, storeUserInfo);
    if (storeUserInfo?.home !== "") {
      setAddress(storeUserInfo?.home);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

  const Submit = async (e) => {
    e.preventDefault(e);
    if ([userProfileImage, nickName, age, gender, address].includes("")) {
      alert("모든 사항을 기입해주세요");
      return;
    }
    console.log(username, "카카오 아이디");

    const formData = new FormData();
    formData.append("userProfileImage", userProfileImage);
    formData.append("nickname", nickName);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("address", home);
    formData.append("username", storeUserInfo.username);
    await axios
      .post("http://3.34.129.164/api/user/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("회원가입 완료", response);
        alert("가입성공");
        navigate("/login");
      })
      .catch((error) => {
        console.log("에러!", error);
      });
  };
  console.log({ username, userProfileImage, nickName, age, gender, address });

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
          ref={userProfileImageRef}
          accept="image/*"
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
            placeholder="2~6자 이내로 입력해주세요."
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
            color={gender === "여성" ? "#000000" : " #CBCBCB"}
            bg={gender === "여성" ? " #FFE9BE;" : "#fff"}
          >
            여성
          </GenderButton>
          <GenderButton
            onClick={() => {
              selectGender("남성");
            }}
            color={gender === "남성" ? "#000000" : " #CBCBCB"}
            bg={gender === "남성" ? " #FFE9BE;" : "#fff"}
          >
            남성
          </GenderButton>
        </InputBox>
        <p>주소</p>
        <InputBox
          onClick={() => {
            dispatch(
              loginUserinfo({
                nickName,
                age,
                gender,
                address,
                userProfileImage,
              })
            );
            navigate("/inputaddress");
          }}
        >
          <Address>{home ? <div>{home} </div> : <div>주소검색</div>}</Address>
        </InputBox>
        <Check>
          <input type="checkbox"/>
          <p>(필수) 개인정보 취급방침에 동의합니다.</p>
        </Check>
        <Button onClick={Submit}>
          <button>등록완료</button>
        </Button>
      </LoginBox>
    </Container>
  );
};

export default Register;

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
  height: 294px;
  background-image: url(${Profilebg});
  background-position: center;
  background-size: contain;
  input {
    display: none;
  }

  span {
    cursor: pointer;
    font-size: 36px;
    display: flex;
    flex-direction: row;
  }
`;

const Arrow = styled.div`
  position: relative;
  top: 70px;
  left: -200px;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 43px;
  background-color: #fcfaff;
  background-color: #fcfcfc;
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
  font-size: 20px;
  border-radius: 12px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Imgset = styled.div`
  border-radius: 50px;
  overflow: hidden;
  width: 108px;
  height: 108px;
  margin-top: 53px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonImg = styled.div`
  width: 173px;
  height: 25px;
  border: 2px solid #ffbb31;
  padding: 8px 22px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 18px;
  margin: 18px 0 20px 0;
  border-radius: 37px;
  cursor: pointer;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  padding-left: 29px;
  width: 100%;
  height: 54px;
  font-family: "AppleSDGothicNeoM00";
  color: #cbcbcb;
  background-color: #fff;
  font-size: 20px;
  border-radius: 12px;
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
    background-color: #ffbb31;
    width: 445px;
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
