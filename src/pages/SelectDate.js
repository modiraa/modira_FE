import React, { useState } from 'react';
import '../css(subin)/SelectDate.css';
import MyCalendar from '../components/selectdate/MyCalendar';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { selectWrite } from '../redux/moduls/SelectWrite';
import MyIcon from '../element/MyIcon';

const SelectDate = () => {

    const nowDate = new Date();
    let year = nowDate.getFullYear();
    let month = nowDate.getMonth()+1;
    let date = nowDate.getDate();
    const fullDate = `${year}/${month}/${date}`;

    const [selectDate,setSelectDate]=useState(fullDate)
    console.log(selectDate)

    let stringDate = selectDate+'';

    // 시간빼고 뭉쳐서 주기
    let splitDate = stringDate.slice(0,15);
    console.log(splitDate)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickDate = ()=> {
        dispatch(selectWrite({date:splitDate}))
        navigate("/selecttime")
    }

    return (
        <div className='select-date'>
            <div className='select-date-top'>
                <div className='select-close' onClick={() => { navigate("/write") }}>
                    <MyIcon iconName={"close"} sizePx={32} color={"gray"} cursor={"point"}/>
                </div>
                <div className='select-date-count'>
                    <p>1 / 6</p>
                </div>
                <div className='select-date-title'>
                    <h2>원하는 모임의<br/>날짜를 알려주세요</h2>
                </div>
                <div className='select-date-value'>
                    <h3>{selectDate}</h3>
                    <h5>에 만나는 모임이에요</h5>
                </div>
            </div>
            <div className='date'>
                <MyCalendar selectDate={selectDate} setSelectDate={setSelectDate}/>
            </div>
            <div className='select-date-bottom'>
                <div className='next' onClick={clickDate}>
                    <h4>다음</h4>
                    <div className='date-arrow-forward-ios'>
                        <MyIcon iconName={"arrow_forward_ios"} sizePx={28} color={"black"} cursor={"point"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDate;
