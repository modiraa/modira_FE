import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function AgePicker({controlledSwiperAgeMin,setControlledSwiperAgeMin,controlledSwiperTo,setControlledSwiperTo,controlledSwiperAgeMax,setControlledSwipeAgerMax}) {

    console.log(controlledSwiperAgeMin+"~"+controlledSwiperAgeMax)

    const ageMinSlideList = ["10대","20대","30대","40대","50대"];

    const ageToSlideList = ["~"];

    const ageMaxSlideList = ["10대","20대","30대","40대","50대"];

    //[0,1,2....59]

    React.useEffect(() => {

        if (controlledSwiperAgeMin){
            console.log(controlledSwiperAgeMin)
        }
        else if(controlledSwiperTo){
        console.log(controlledSwiperTo)
        }
        else if(controlledSwiperAgeMax){
        console.log(controlledSwiperAgeMax)
        }
    }
        , [controlledSwiperAgeMin,controlledSwiperTo,controlledSwiperAgeMax])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%" }}>

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={ageMinSlideList} controlledSwiper={controlledSwiperAgeMin} setControlledSwiper={setControlledSwiperAgeMin} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex", }}>
                <Picker slideList={ageToSlideList} controlledSwiper={controlledSwiperTo} setControlledSwiper={setControlledSwiperTo} />
            </div>

            <div style={{ height: "100%", width: "400px", display: "flex"}}>
                <Picker slideList={ageMaxSlideList} controlledSwiper={controlledSwiperAgeMax} setControlledSwiper={setControlledSwipeAgerMax} />
            </div>

            <div className="vizor"></div>



        </div>
    );
}