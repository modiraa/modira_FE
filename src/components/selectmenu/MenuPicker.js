import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "../public/Picker";


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

            <div style={{ height: "100%", width: "80%", display: "flex",marginLeft:"10%",marginRight:"10%"}}>
                <Picker slideList={menuList} controlledSwiper={controlledSwiperMenu} setControlledSwiper={setControlledSwiperMenu} />
            </div>

            <div className="vizor" style={{backgroundColor:"#FFBB31"}}></div>



        </div>
    );
}