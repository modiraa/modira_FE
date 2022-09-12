import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUserinfo } from "../redux/moduls/UserInfo";
//component
import AgeDropdown from "../components/register/AgeDropdown";
import ProfileBg from "../components/public/ProfileBg";
import MyIcon from "../element/MyIcon";

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
  console.log(username, "유저확인");

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
    if (storeUserInfo?.ProfileImg !== "") {
      SetProfileImg(storeUserInfo?.ProfileImg);
      console.log("여기옴?", storeUserInfo);
    }
  }, []);

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
  }, [dispatch]);

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
  console.log({
    username,
    userProfileImage,
    nickName,
    age,
    gender,
    address,
  });

  return (
    <>
      <Box>
        <Arrow
          onClick={() => {
            navigate("/");
          }}
        >
          <MyIcon sizePx={60} iconName={"longarrow"} />
        </Arrow>
        <input
          type="file"
          ref={userProfileImageRef}
          accept="image/*"
          onChange={PreviewProfileImg}
        />
        <ProfileBg ProfileImg={ProfileImg} />
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
                ProfileImg,
                username,
              })
            );
            navigate("/inputaddress");
          }}
        >
          <Address>
            {location.state?.homesi == undefined ? (
              <div>주소검색</div>
            ) : (
              <div>{home} </div>
            )}
          </Address>
        </InputBox>
        <Check>
          <input type="checkbox" />
          <p>(필수) 개인정보 취급방침에 동의합니다.</p>
        </Check>
        <Button onClick={Submit}>
          <button>등록완료</button>
        </Button>
      </LoginBox>
    </>
  );
};

export default Register;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  input {
    display: none;
  }
  span {
    cursor: pointer;
    font-size: 2.25rem;
    display: flex;
    flex-direction: row;
  }
`;

const Arrow = styled.div`
  position: relative;
  top: 4.375rem;
  left: -12.5rem;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2.6875rem;
  background-color: #fcfaff;
  background-color: #fcfcfc;
  font-family: "Noto Sans KR";
  p {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27.4375rem;
  height: 100%;
  margin-bottom: 1.8125rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1.8125rem;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #cbcbcb;
  }
`;

const ButtonImg = styled.div`
  width: 12rem;
  height: 2.5rem;
  border: 0.125rem solid #ffbb31;
  padding: 0.1875rem 1.125rem;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.125rem;
  margin: 1.125rem 0 1.25rem 0;
  border-radius: 2.3125rem;
  cursor: pointer;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.8125rem;
  width: 100%;
  height: 3.375rem;
  color: #cbcbcb;
  background-color: #fff;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const GenderButton = styled.div`
  width: 13.3125rem;
  height: 3.375rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 0.75rem;
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
    width: 27.8125rem;
    height: 4.375rem;
    border: none;
    color: white;
    padding: 0.75rem 1.5625rem;
    text-align: center;
    font-size: 1.25rem;
    margin-top: 3.75rem;
    border-radius: 2.1875rem;
    cursor: auto;
  }
`;

const Check = styled.span`
  display: flex;
  align-items: center;
  input {
    margin-right: 0.9375rem;
    width: 1.1875rem;
    height: 1.1875rem;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0 1.8125rem 0 0;
  }
`;
