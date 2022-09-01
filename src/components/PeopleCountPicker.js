import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function PeopleCountPicker({controlledSwiperPeopleCount,setControlledSwiperPeopleCount}) {

    console.log(controlledSwiperPeopleCount)

    const PeopleCountList = ["3명", "4명", "5명", "6명", "7명", "8명"]

    React.useEffect(() => {

        if (controlledSwiperPeopleCount){
            console.log(controlledSwiperPeopleCount)
        }
    }, [controlledSwiperPeopleCount])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%"}}>

            <div style={{ height: "100%", width: "400px", display: "flex", marginLeft:"60px"}}>
                <Picker slideList={PeopleCountList} controlledSwiper={controlledSwiperPeopleCount} setControlledSwiper={setControlledSwiperPeopleCount} />
            </div>

            <div className="vizor" style={{backgroundColor:"#FFBB31"}}></div>



        </div>
    );
}