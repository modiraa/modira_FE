import React, { useState } from 'react';
import TimePicker from '../components/selecttime/TimePicker';
import '../css(subin)/SelectTime.css';
import { useDispatch } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';

const SelectTime = () => {

    const [controlledSwiperAmPm,setControlledSwiperAmPm] = useState('오전')
    const [controlledSwiperHour,setControlledSwiperHour] = useState('1시')
    const [controlledSwiperMin,setControlledSwiperMin] = useState('0분')

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickTime = () => {
        dispatch(selectWrite({time:controlledSwiperAmPm+" "+controlledSwiperHour+" "+controlledSwiperMin}))
        navigate("/selectgps")
    }

    console.log("여기",controlledSwiperAmPm)

    return (
        <div className='select_time'>
            <div className='select_time_top'>
                <div className='select-close'>
                    <span className="material-icons" onClick={() => { navigate("/write") }}>
                        close
                    </span>
                </div>
                <div className='select_time_count'>
                    <p>2 / 6</p>
                </div>
                <div className='select_time_title'>
                    <h2>원하는 모임의<br/>시간을 알려주세요</h2>
                </div>
                <div className='select_time_value'>
                    <h3>{controlledSwiperAmPm}{controlledSwiperHour}{controlledSwiperMin}</h3>
                    <h5>에 만나는 모임이에요</h5>
                </div>
            </div>
            <div className='test'>
                <TimePicker controlledSwiperAmPm={controlledSwiperAmPm} setControlledSwiperAmPm={setControlledSwiperAmPm}
                controlledSwiperHour={controlledSwiperHour} setControlledSwiperHour={setControlledSwiperHour}
                controlledSwiperMin={controlledSwiperMin} setControlledSwiperMin={setControlledSwiperMin}/>
            </div>
            
            <div className='select_time_bottom'>
                <div className='prev' onClick={()=>{navigate(-1)}}>
                        <div className='time-arrow-back-ios'>
                            <span className="material-symbols-outlined">
                                arrow_back_ios
                            </span>
                        </div>
                        <h4>이전</h4>
                    </div>
                    <div className='next' onClick={clickTime}>
                        <h4>다음</h4>
                        <div className='time-arrow-forward-ios'>
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SelectTime;
