import styled from "styled-components";
import { useState, useEffect } from "react";

const PostDetail = () => {
  const [count, setCount] = useState(0);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  // 렌더링 될때마다 매번 실행
  useEffect(() => {
    console.log("렌더링");
  });

  return (
    <Container>
      <div>모임소개</div>
      <p>N빵 모임(모임 카테고리)</p>
      <p>Lorem ipsum dolor</p>
      <p>6월 9일 2명 참여 메뉴이름</p>
      <p>Lorem ipsum dolor</p>
      <div>지도 GPS</div>
      <div>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>여성</p>
        <p>20대</p>
        <div>
          <button onClick={handleCountUpdate}>❤</button>
          <span>{count}</span>
        </div>
        <div>
          <p>20대 여성만 신청가능한 모임입니다.</p> 
          <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Et id nam quis sodales. Eget lobortis
          neque mi,</p>
        </div>
      </div>
    </Container>
  );
};
export default PostDetail;

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
`;
