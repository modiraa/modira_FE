import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Enter = () => {
  // 이미지 데이터
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];

  const variants = {
    initial: direction => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        // scale: 0.5,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: direction => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }
  
  const [index, setIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <Container> 
        <Slideshow>
        <AnimatePresence initial={false} custom={direction}>
            <motion.img
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              src={images[index]}
              alt="slides"
              className="slides"
              key={images[index]}
              custom={direction}
            />
            </AnimatePresence>
            <Button className="prevButton" onClick={prevStep}>
              ◀
            </Button>
            <Button className="nextButton" onClick={nextStep}>
              ▶
            </Button>
          </Slideshow>
        {/* <Motion.div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsG3u77s8fTCxsnn7O/f5OfFyczP09bM0dO8wMPk6ezY3eDd4uXR1tnJzdBvAX/cAAACVElEQVR4nO3b23KDIBRA0ShGU0n0//+2KmO94gWZ8Zxmr7fmwWEHJsJUHw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwO1MHHdn+L3rIoK6eshsNJ8kTaJI07fERPOO1Nc1vgQm2oiBTWJ+d8+CqV1heplLzMRNonED+4mg7L6p591FC+133/xCRNCtd3nL9BlxWP++MOaXFdEXFjZ7r8D9l45C8y6aG0cWtP/SUGhs2d8dA/ZfGgrzYX+TVqcTNRRO9l+fS5eSYzQs85psUcuzk6igcLoHPz2J8gvzWaH/JLS+95RfOD8o1p5CU5R7l5LkfKEp0mQ1UX7hsVXqDpRrifILD/3S9CfmlUQFhQfuFu0STTyJ8gsP3PH7GVxN1FC4t2sbBy4TNRTu7LyHJbqaqKFw+/Q0ncFloo7CjRPwMnCWqKXQZ75El4nKC9dmcJaou9AXOE5UXbi+RGeJygrz8Uf+GewSn9uXuplnWDZJ7d8f24F/s6iq0LYf9olbS3Q8i5oKrRu4S9ybwaQ/aCkqtP3I28QDgeoK7TBya/aXqL5COx67PTCD2grtdOwH+pQV2r0a7YVBgZoKwwIVFQYG6ikMDVRTGByopjD8ATcKb0UhhRTe77sKs2DV7FKSjId18TUEBYVyLhUThWfILHTDqmI85/2RWWjcE/bhP6OD7maT3h20MHsA47JC3PsW0wcwLhv9t0OOPOIkCn21y2bXXwlyylxiYMPk1SuCSmpfK8bNQvIrpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwNX4BCbAju9/X67UAAAAASUVORK5CYII=" />
        </Motion.div> */}
 
      <TextBox>Lorem ipsum dolor sit amet, consectetur adipiscing</TextBox>
    </Container>
  );
};

export default Enter;

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e7e7e7;
`;

const Slideshow = styled.div`
  justify-content: center;
  display: flex;
  margin: auto;
  width: 100%;
  aspect-ratio: calc(16 / 9);
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 16px;
  font-size: 18px;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 32px;
  background-color: gray;
  border: none;
  cursor: pointer;
  text-align: center;
  color: white;
  &:hover {
    background-color: black;
  }
  &.prevButton {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
  &.nextButton {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }

  &.slides {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const TextBox = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 5%;
  background-color: white;
`;
