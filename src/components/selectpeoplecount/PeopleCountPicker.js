import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "../public/Picker";



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

            <div style={{ height: "100%", width: "80%", display: "flex",marginLeft:"10%",marginRight:"10%"}}>
                <Picker slideList={PeopleCountList} controlledSwiper={controlledSwiperPeopleCount} setControlledSwiper={setControlledSwiperPeopleCount} />
            </div>

            <div className="vizor" style={{backgroundColor:"#FFBB31"}}></div>



        </div>
    );
}