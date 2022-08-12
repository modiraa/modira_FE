import React from "react";
import styled from "styled-components";

const FirstLogin = () => {
  //https://velog.io/@jahommer/React-%EA%B2%80%EC%83%89%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0
  // 밀착:https://github.com/hanghae99-MEALCHAK/MEALCHAK-client-application/blob/main/src/pages/ProfileEdit.js
  //이미지 업로드
  const [MyProfileImg, SetProfileImg] = React.useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );

  const [ImgForServerType, SetImgForServerType] = React.useState(null);

  const RefProfileImg = React.useRef(null);

  const PreviewProfileImg = (e) => {
    SetProfileImg(URL.createObjectURL(e.target.files[0]));
    SetImgForServerType(e.target.files[0]);
    console.log(ImgForServerType);
  };
  const ImageUpload = () => {
    RefProfileImg.current.click();
  };

  // 검색창에 검색어 변화
  const [search, setSearch] = React.useState("");
  // 변화된 value값을 변경
  const serchAdress = (e) => {
    setSearch(e.target.value);
    //  검색값 걸러내기
    //  const filterTitle = movies.filter((p) => {
    //    return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    //  });
  };
  return (
    <div>
      <Box>
        {" "}
        <button style={{ display: "left" }}>뒤로가기</button>
        <input
          type="file"
          ref={RefProfileImg}
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
          <Input type="text" placeholder="김아무개"></Input>
        </InputBox>
        <InputBox>
          {" "}
          <p>전화번호 </p>
          <Input type="text" placeholder="010.0000.0000"></Input>
        </InputBox>
        <InputBox>
          <p>닉네임 </p>
          <Input type="text" placeholder="3~6자 이내로 입력해주세요."></Input>
        </InputBox>
        <InputBox>
          <p>나이대 </p>
          {/* https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-select-box-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-a20e2bf082b2 */}
          <select>
            <option>선택하기</option>
            <option key="apple" value="apple">
              10대
            </option>
            <option key="orange" value="orange">
              20대
            </option>
            <option key="banana" value="banana">
              30대
            </option>
          </select>
        </InputBox>
        <InputBox>
          <p>성별 </p>
          <input type="radio" name="gener" />{" "}
          <span className="up">남자</span>&nbsp;&nbsp;{" "}
          <input type="radio" name="gener" /> <span className="up">여자</span>
        </InputBox>
        <InputBox>
          {/* https://intrepidgeeks.com/tutorial/0213-registered-member-next-zip-code-api */}
          <p>주소 </p>
          <input
            type="text"
            placeholder="주소검색"
            value={search}
            onChange={serchAdress}
          />
          🔍︎
        </InputBox>
        <input type="checkbox"></input>
        <label htmlFor="cheese">(필수) 개인정보 취급방침에 동의합니다.</label>
        <div>보기</div>
        <ButtonSubmit>등록완료</ButtonSubmit>
      </LoginBox>
    </div>
  );
};
export default FirstLogin;

const Box = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
`;

const ButtonImg = styled.button`
  background: #737373;
  color: #ffffff;
  border-radius: 68px;
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
