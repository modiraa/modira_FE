import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Enter = () => {
//속도 조절 안될 시 최후 수단
  // /https://swiperjs.com/demos#navigation
  // 이미지 데이터
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
        // scale: 0.5,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.1 }
      }
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.1 }
        }
      };
    }
  };
  
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] =  React.useState(0);
  
    function nextStep() {
      setDirection(1);
      if (index === images.length - 1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }
  
    function prevStep() {
      setDirection(-1);
      if (index === 0) {
        setIndex(images.length - 1);
        return;
      }
      setIndex(index - 1);
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
      </Container>
    );
  }

export default Enter;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: whitesmoke;
`;

const Slideshow = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  aspect-ratio: calc(16 / 9);
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  width: 48px;
  aspect-ratio: 1;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  text-align: center;
 
  &:hover {
    background-color: #24243e;
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
