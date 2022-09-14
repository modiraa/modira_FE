import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Picker.css";

// import required modules
import {  Pagination, Mousewheel, Controller } from "swiper";

export default function Picker({ slideList, setControlledSwiper, controlledSwiper }) {


    return (

        <div style={{ height: "100%", width: "100%", display: "flex", paddingTop:"5rem",
        boxSizing:"border-box" }}>
            <Swiper className="Select-Swiper"
                controller={{ control: controlledSwiper }}
                direction={"vertical"}
                centeredSlides={true}
                slidesPerView={5}
                spaceBetween={0}
                mousewheel={true}
                onSlideChange={(e) => { setControlledSwiper(slideList[e.realIndex]) }}
                slideToClickedSlide={true}
                modules={[Pagination, Mousewheel, Controller]}
            >
                {slideList.map((v, i) => <SwiperSlide className="Select-SwiperSlide" key={i}>{v}</SwiperSlide>)}
            </Swiper>
            
        </div>
    );
}