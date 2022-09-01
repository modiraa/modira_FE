import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules

import "../css(subin)/Swiper.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Enter = () => {
  return (
    <Container>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper>
    </Container>
  );
};

export default Enter;

const Container = styled.div`
  display: flex;
  width: 525px;
  height: 100vh;
  background-color: white;
`;
