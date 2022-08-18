import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function Test({controlledSwiper,setControlledSwiper}) {

    const hourSlideList = Array(12).fill().map((v, i) => v = i + 1);

    const minuteSlideList = Array(60).fill().map((v, i) => v = i);

    const ampmleList = ["오전", "오후"]

    //[0,1,2....59]

    React.useEffect(() => {

        if (controlledSwiper) { console.log(controlledSwiper) }



    }

        , [controlledSwiper])



    return (

        <div style={{ display: "flex" }}>

            <div style={{ height: "500px", width: "400px", display: "flex"}}>
                <Picker slideList={ampmleList} controlledSwiper={controlledSwiper} setControlledSwiper={setControlledSwiper} />
            </div>

            <div style={{ height: "500px", width: "400px", display: "flex"}}>
                <Picker slideList={hourSlideList} controlledSwiper={controlledSwiper} setControlledSwiper={setControlledSwiper} />
            </div>

            <div style={{ height: "500px", width: "400px", display: "flex"}}>
                <Picker slideList={minuteSlideList} controlledSwiper={controlledSwiper} setControlledSwiper={setControlledSwiper} />
            </div>





        </div>
    );
}