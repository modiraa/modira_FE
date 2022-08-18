import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import MapgpsForDetail from "../components/MapgpsForDetail";

function PostDetail() {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [detailData, setDetailData] = useState({});

//   useEffect(() => {
//     axios
//       .get(`http://sparta-9kyo.shop/api/post/detail/${params.postId}`)
//       .then((response) => {
//         console.log(response);
//         setDetailData({ ...response.data });
//         console.log("api 호출 성공", params.postId);
//       });
//   }, [params.postId]); // [] : 안에 있는 값이 바뀌면 다시 useEffect 작동
//   console.log(detailData);

// {
//   category: “골든벨”,
//   title: “여기에 제목이 들어갑니다.”,
//   date:”6월9일”,
//   time:”AM 9:00”,
//   numberOfPeople: “2명 참여”,
//   menuForImage": “음식아이콘”, 
//   menu”:”일식”,  
//   restaurantAddress: "서울특별시 마포구 땡땡로 00-0”,
//   latitude(위도):” 35.8706072114037”,
//   longitude(경도):”128.598955620405 ”,
//   limitgender:”남성”,
//   limitage:”20대”,
//   writer: {  writerprofileImage:”이미지경로”,
//                 writernickname:”케이오스”
//                 writergender:”남성”,
//                 writerage:”20대”,
//               }
// }

  return (
    <Container>
      상세페이지
{/* //       <Summary>
//         <Category>{category}</Category>
//         <MeetTitle>{title}</MeetTitle>
//         <MeetInfo>
//           {date}
//           {time}
//           {numberOfPeople}
//           {menu}
//         </MeetInfo>
//       </Summary>
//       <div>음식점 주소</div>
//       <Map>지도</Map>
//       <Writer>
//         <WriterImage>{profileImage}</WriterImage>
//         <WriterName>{nickname}</WriterName>
//         <WriterInfo>
//           {writergender}
//           {writerage}
//         </WriterInfo>
//         <LikeIt>하뚜</LikeIt>
//         <Limit>
//           <p>{writergender}{writerage}만 신청가능한 모임입니다.</p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id nam
//             quis sodales. Eget lobortis neque mi,
//           </p>
//           <ButtonSubmit>참여신청</ButtonSubmit>
//         </Limit>
//       </Writer> */}
    </Container>
  );
}
export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f1f1f1;
`;

// const Summary = styled.div`
//   width: 100%;
//   height: 20%;
//   background-color: #fff;
// `;

// const Category = styled.div`
//   font-size: 18px;
// `;

// const MeetTitle = styled.div`
//   font-size: 31px;
// `;

// const MeetInfo = styled.div`
//   font-size: 20px;
//   color: #9a9a9a;
// `;

// const Map = styled.div`
//   justify-content: center;
//   width: 100%;
// `;

// const Writer = styled.div`
//   width: 100%;
//   height: 20%;
//   background-color: #e7e7e7;
// `;

// const Limit = styled.div`
//   width: 100%;
//   height: 20%;
//   background-color: #e7e7e7;
// `;

// const ButtonSubmit = styled.button`
//   background-color: black;
//   width: 70%;
//   height: auto;
//   border: none;
//   color: white;
//   padding: 12px 25px;
//   text-align: center;
//   font-size: 0.9rem;
//   margin-top: 25px;
//   border-radius: 35px;
//   cursor: auto;
// `;
