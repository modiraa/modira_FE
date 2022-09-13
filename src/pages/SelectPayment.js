import React, { useState } from 'react';
import '../css(subin)/SelectPayment.css';
import PaymentPicker from '../components/selectpayment/PaymentPicker';
import { useDispatch } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';
import MyIcon from '../element/MyIcon';

const SelectPayment = () => {

    const [controlledSwiperPayment,setControlledSwiperPayment] = useState('방장이 쏜다! 골든벨')

    console.log("여기",controlledSwiperPayment)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickPayment = () => {
        dispatch(selectWrite({category:controlledSwiperPayment}))
        navigate("/write")
    }

    return (
        <div className='select_payment'>
            <div className='select_payment_top'>
                <div className='select-close' onClick={() => { navigate("/write") }}>
                    <MyIcon iconName={"close"} sizePx={32} color={"gray"} cursor={"point"}/>
                </div>
                <div className='select_payment_count'>
                    <p>6 / 6</p>
                </div>
                <div className='select_payment_title'>
                    <h2>모임 정산은<br/>어떻게 하고 싶은가요?</h2>
                </div>
                <div className='select_payment_value'>
                    <h3>{controlledSwiperPayment}</h3>
                    <h5>으로 정산하는 모임이에요</h5>
                </div>
            </div>
            <div className='payment'>
                <PaymentPicker controlledSwiperPayment={controlledSwiperPayment} setControlledSwiperPayment={setControlledSwiperPayment}/>
            </div>
            
            <div className='select_payment_bottom'>
                <div className='prev' onClick={()=>{navigate(-1)}}>
                    <div className='payment-arrow-back-ios'>
                        <MyIcon iconName={"arrow_back_ios"} sizePx={28} color={"gray"} cursor={"point"}/>
                    </div>
                    <h4>이전</h4>
                </div>
                <div className='next' onClick={clickPayment}>
                    <h4>다음</h4>
                    <div className='payment-arrow-forward-ios'>
                        <MyIcon iconName={"arrow_forward_ios"} sizePx={28} color={"black"} cursor={"point"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPayment;
