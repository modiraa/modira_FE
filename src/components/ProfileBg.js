import styled from "styled-components";
import ProfileLine from "../image/ProfileLine.png";
const ProfileBg = ({ ProfileImg }) => {
  let code = new URL(window.location.href);
  const PageCheck = code.href;
  console.log(PageCheck, "체크");

  return (
    <Background>
      <YellowBack />
      <img className="line" src={ProfileLine} />
      <Circle>
        {PageCheck === "http://localhost:3000/register" ? (
          <img src={ProfileImg} />
        ) : (
          <img src={ProfileImg} />
        )}
      </Circle>
    </Background>
  );
};
export default ProfileBg;

const Background = styled.div`
  img.line {
    width: 100%;
    height: 100%;
    margin-top: -101px;
    z-index: 2;
    position: relative;
  }
`;

const YellowBack = styled.div`
  height: 155px;
  background-color: #fffcf6;
`;

const Circle = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: white;
  margin-top: -141.8px;
  margin-left: 207px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
    z-index: 1;
    position: relative;
  }
`;
