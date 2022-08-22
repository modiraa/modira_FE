import React, { useState } from 'react';
import '../css(subin)/SelectPeopleCount.css';
import PeopleCountPicker from '../components/PeopleCountPicker';

const SelectPeopleCount = () => {

    const [controlledSwiperPeopleCount,setControlledSwiperPeopleCount] = useState('')

    console.log("여기",controlledSwiperPeopleCount)
    return (
        <div className='select_people_count'>
            <div className='select_people_count_top'>
                <div className='select_people_count_count'>
                    <p>4/6</p>
                </div>
                <div className='select_people_count_title'>
                    <h2>몇명이 참여하는<br/>모임인가요?</h2>
                </div>
                <div className='select_people_count_value'>
                    <h3>{controlledSwiperPeopleCount}</h3>
                    <h5>이 참여하는 모임이에요</h5>
                </div>
            </div>
            <div className='people_count'>
                <PeopleCountPicker controlledSwiperPeopleCount={controlledSwiperPeopleCount} setControlledSwiperPeopleCount={setControlledSwiperPeopleCount}/>
            </div>
            
            <div className='select_people_count_bottom'>
                <div className='prev'>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    <h4>이전</h4>
                </div>
                <div className='next'>
                    <h4>다음</h4>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SelectPeopleCount;
