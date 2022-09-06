import styled from "styled-components";
import ProfileLine from "../image/ProfileLine.png";
import "../css(subin)/ProfileBg.css";
import { relativeTimeRounding } from "moment";

const ProfileBg = ({ ProfileImg }) => {
  let code = new URL(window.location.href);
  const PageCheck = code.href;
  console.log(PageCheck, "체크");
  console.log('여기는 은형님', ProfileImg);

  return (
    <Background>
     {PageCheck === "http://localhost:3000/register" ? (
       <div  style={{height: "155px",backgroundColor: "#fffcf6"}}/>
        ) : (
          <div  style={{height: "192px",backgroundColor: "#fffcf6"}}/>
        )}
      <img className="line" src={ProfileLine} />

      <Circle>
        {ProfileImg ? (
          <img src={ProfileImg} />
        ) : (
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "40px",
              fontVariationSettings: "'FILL' 1",
              color: "#FFE9BE",
              width: "115px",
              height: "115px",
              // position: "absolute",
            }}
          >
            person_filled
          </span>
        )}

        {PageCheck === "http://localhost:3000/register" ? (
          <img src={ProfileImg} />
        ) : (
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "40px",
              fontVariationSettings: "'FILL' 1",
              color: "#FFE9BE",
              width: "115px",
              height: "115px",
              // position: "absolute",
            }}
          >
            person_filled
          </span>
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

const Circle = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: white;
  margin-top: -141.8px;
  margin-left: 207px;
  overflow: hidden;
  span {
    margin-left: 38px;
    margin-top: 40px;
    z-index: 3;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    /* border-radius: 50%; */
    z-index: 1;
    position: relative;
  }
`;
