import styled from "styled-components";
import ProfileLine from "../../image/ProfileLine.png";
import MyIcon from "../../element/MyIcon";

const ProfileBg = ({ ProfileImg }) => {
  let code = new URL(window.location.href);
  const PageCheck = code.href;
  console.log(PageCheck, "체크");
  console.log("여기는 은형님", ProfileImg);

  return (
    <Background>
      {PageCheck === "http://localhost:3000/register" ? (
        <div style={{ height: "9.6875rem", backgroundColor: "#fffcf6" }} />
      ) : (
        <div style={{ height: "12rem", backgroundColor: "#fffcf6" }} />
      )}
      <Line className="line" src={ProfileLine} />

      <Circle>
        {ProfileImg ? (
          <img src={ProfileImg} />
        ) : (
          <div>
            <MyIcon sizePx={80} iconName={"profile"} color={"beige"} />
          </div>
        )}

        {PageCheck === "http://localhost:3000/register" ? (
          <img src={ProfileImg} />
        ) : (
          <MyIcon sizePx={80} iconName={"profile"} color={"beige"} />
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
    margin-top: -6.4rem;
    z-index: 2;
    position: relative;
  }
`;
const Line = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
const Circle = styled.div`
  width: 7.1875rem;
  height: 7.1875rem;
  border-radius: 50%;
  background-color: white;
  margin-top: -26.3%;
  margin-left: 39.5%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }
  div {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;
