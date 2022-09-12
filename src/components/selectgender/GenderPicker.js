import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "../public/Picker";



export default function MenuPicker({controlledSwiperGender,setControlledSwiperGender}) {

    console.log(controlledSwiperGender)

    const genderList = ["여 성", "남 성"]

    React.useEffect(() => {

        if (controlledSwiperGender){
            console.log(controlledSwiperGender)
        }
    }, [controlledSwiperGender])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%"}}>

            <div style={{ height: "100%", width: "80%", display: "flex",marginLeft:"10%",marginRight:"10%"}}>
                <Picker slideList={genderList} controlledSwiper={controlledSwiperGender} setControlledSwiper={setControlledSwiperGender} />
            </div>

            <div className="vizor" style={{backgroundColor:"#FFBB31"}}></div>



        </div>
    );
}