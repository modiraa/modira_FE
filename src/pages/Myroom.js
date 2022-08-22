import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LowerNavbar from "../components/LowerNavbar";
import Navbar from "../components/Navbar";

const Myroom = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <BorderLine />
      <Container>
        <Minibanner>
          <p>미니배너</p>
        </Minibanner>
        <CreateRoom>
          <p>생성한 모임</p>
          <Post
            onClick={() => {
              navigate("/postdetail:10");
            }}
          ></Post>
          <div>Lorem ipsum dolor</div>
        </CreateRoom>
        <BorderLine />
        <CreateRoom>
          <p>신청한 모임</p>
          <Post
            onClick={() => {
              navigate("/postdetail:10");
            }}
          ></Post>
          <div>Lorem ipsum dolor</div>
        </CreateRoom>
      </Container>
      <LowerNavbar />
    </>
  );
};
export default Myroom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDGothicNeoB00";
  width: 525px;
  background-color: #fff;
  margin-bottom: 12px;
`;

const Minibanner = styled.div`
  width: 100%;
  height: 126px;
  background: #e2e2e2;
  margin-top: 15px;
  p {
    font-size: 25px;
    display: flex;
    justify-content: center;
  }
`;

const CreateRoom = styled.div`
  margin: 29px 43px 0 43px;
  p {
    margin-bottom: 19px;
    font-size: 26px;
  }
  div {
    margin: 9px 0 24px 0;
    font-size: 23px;
  }
`;

const BorderLine = styled.div`
  width: 100%;
  height: 12px;
  background: #F7F7F7;;
`;

const Post = styled.div`
  width: 439px;
  height: 167px;
  background-color: #e2e2e2;
  border-radius: 12px;
  margin:0;
`;
