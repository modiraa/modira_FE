import React, { useRef, useState } from "react";

// Import Swiper React components

import Picker from "../public/Picker";



export default function PaymentPicker({controlledSwiperPayment,setControlledSwiperPayment}) {

    console.log(controlledSwiperPayment)

    const PaymentList = ["방장이 쏜다! 골든벨", "다같이 내자! N빵"]

    React.useEffect(() => {

        if (controlledSwiperPayment){
            console.log(controlledSwiperPayment)
        }
    }, [controlledSwiperPayment])



    return (

        <div style={{ display: "flex", position: "relative", height:"100%"}}>

            <div style={{ height: "100%", width: "400px", display: "flex", marginLeft:"60px"}}>
                <Picker slideList={PaymentList} controlledSwiper={controlledSwiperPayment} setControlledSwiper={setControlledSwiperPayment} />
            </div>

            <div className="vizor" style={{backgroundColor:"#FFBB31"}}></div>



        </div>
    );
}