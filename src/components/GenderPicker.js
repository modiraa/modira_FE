import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function MenuPicker({controlledSwiperGender,setControlledSwiperGender}) {

    console.log(controlledSwiperGender)

    const genderList = ["여성", "남성"]

    React.useEffect(() => {

        if (controlledSwiperGender){
            console.log(controlledSwiperGender)
        }
    }, [controlledSwiperGender])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%"}}>

            <div style={{ height: "100%", width: "400px", display: "flex", marginLeft:"60px"}}>
                <Picker slideList={genderList} controlledSwiper={controlledSwiperGender} setControlledSwiper={setControlledSwiperGender} />
            </div>

            <div className="vizor"></div>



        </div>
    );
}