import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Enter1 from "../image/Enter1.png";
import Enter2 from "../image/Enter2.png";
import Enter3 from "../image/Enter3.png";
import Enter4 from "../image/Enter4.png";

// import required modules

import "../css(subin)/Swiper.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Enter = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Enter1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Enter2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Enter3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Enter4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Enter;

