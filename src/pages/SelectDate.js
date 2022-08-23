import React, { useState } from 'react';
import '../css(subin)/SelectDate.css';
import MyCalendar from '../components/MyCalendar';

const SelectDate = () => {

    const [selectDate,setSelectDate]=useState('')
    console.log(selectDate);

    return (
        <div className='select-date'>
            <div className='select-date-top'>
                <div className='select-date-count'>
                    <p>1/6</p>
                </div>
                <div className='select-date-title'>
                    <h2>모임을 원하는<br/>날짜를 알려주세요</h2>
                </div>
                <div className='select-date-value'>
                    <h3>{}</h3>
                    <h5>에 만나는 모임이에요</h5>
                </div>
            </div>
            <div className='date'>
                <MyCalendar selectDate={selectDate} setSelectDate={setSelectDate}/>
            </div>
            <div className='select-date-bottom'>
                <div className='next'>
                    <h4>다음</h4>
                    <div className='date-arrow-forward-ios'>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectDate;
