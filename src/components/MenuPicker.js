import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "./Picker";



export default function MenuPicker({controlledSwiperMenu,setControlledSwiperMenu}) {

    console.log(controlledSwiperMenu)

    const menuList = ["한식", "중식", "일식", "양식", "기타" ]

    React.useEffect(() => {

        if (controlledSwiperMenu){
            console.log(controlledSwiperMenu)
        }
    }, [controlledSwiperMenu])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%"}}>

            <div style={{ height: "100%", width: "400px", display: "flex", marginLeft:"60px"}}>
                <Picker slideList={menuList} controlledSwiper={controlledSwiperMenu} setControlledSwiper={setControlledSwiperMenu} />
            </div>

            <div className="vizor"></div>



        </div>
    );
}