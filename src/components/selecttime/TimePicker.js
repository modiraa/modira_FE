import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "../public/Picker";


export default function TimePicker({controlledSwiperAmPm,setControlledSwiperAmPm,controlledSwiperHour,setControlledSwiperHour,controlledSwiperMin,setControlledSwiperMin}) {

    console.log(controlledSwiperAmPm,controlledSwiperHour,controlledSwiperMin)

    const hourSlideList = Array(12).fill().map((v, i) => v = i + 1 + "시");

    const minuteSlideList = Array(60).fill().map((v, i) => v = i + "분");

    const ampmleList = ["오전", "오후"]

    //[0,1,2....59]

    React.useEffect(() => {

        if (controlledSwiperAmPm){
            console.log(controlledSwiperAmPm)
        }
        else if(controlledSwiperHour){
        console.log(controlledSwiperHour)
        }
        else if(controlledSwiperMin){
        console.log(controlledSwiperMin)
        }
    }
        , [controlledSwiperAmPm,controlledSwiperHour,controlledSwiperMin])

    return (

        <div style={{ display: "flex", position: "relative", height:"100%" }}>
            

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={ampmleList} controlledSwiper={controlledSwiperAmPm} setControlledSwiper={setControlledSwiperAmPm} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex", }}>
                <Picker slideList={hourSlideList} controlledSwiper={controlledSwiperHour} setControlledSwiper={setControlledSwiperHour} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={minuteSlideList} controlledSwiper={controlledSwiperMin} setControlledSwiper={setControlledSwiperMin} />
            </div>

            <div className="vizor" style={{backgroundColor:'#FFBB31'}}></div>



        </div>
    );
}