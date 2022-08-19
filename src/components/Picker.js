import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../css(subin)/Picker.css";



// import required modules
import { FreeMode, Pagination, Mousewheel, Controller } from "swiper";

export default function Picker({ slideList, setControlledSwiper, controlledSwiper }) {
    //   console.log(slideList)
    // React.useEffect(()=>{
    // //   if(controlledSwiper){ console.log(controlledSwiper)}
    // }
    //   ,[])

    return (

        <div style={{ height: "100%", width: "100%", display: "flex" }}>
            <Swiper
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
                {slideList?.map((v, i) => <SwiperSlide key={i}>{v}</SwiperSlide>)}
            </Swiper>
            
        </div>
    );
}