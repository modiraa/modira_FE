import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function Test({controlledSwiper1,setControlledSwiper1,controlledSwiper2,setControlledSwiper2,controlledSwiper3,setControlledSwiper3}) {

    console.log(controlledSwiper1,controlledSwiper2,controlledSwiper3)

    const hourSlideList = Array(12).fill().map((v, i) => v = i + 1 + "시");

    const minuteSlideList = Array(60).fill().map((v, i) => v = i + "분");

    const ampmleList = ["오전", "오후"]

    //[0,1,2....59]

    React.useEffect(() => {

        if (controlledSwiper1){
            console.log(controlledSwiper1)
        }
        else if(controlledSwiper2){
        console.log(controlledSwiper2)
        }
        else if(controlledSwiper3){
        console.log(controlledSwiper3)
        }
    }
        , [controlledSwiper1,controlledSwiper2,controlledSwiper3])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%" }}>

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={ampmleList} controlledSwiper={controlledSwiper1} setControlledSwiper={setControlledSwiper1} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex", }}>
                <Picker slideList={hourSlideList} controlledSwiper={controlledSwiper2} setControlledSwiper={setControlledSwiper2} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={minuteSlideList} controlledSwiper={controlledSwiper3} setControlledSwiper={setControlledSwiper3} />
            </div>

            <div className="vizor"></div>



        </div>
    );
}