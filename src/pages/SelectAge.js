import React, { useState } from 'react';
import '../css(subin)/SelectAge.css';
import AgePicker from '../components/AgePicker';

const SelectAge = () => {

    const [controlledSwiperAgeMin,setControlledSwiperAgeMin] = useState('')
    const [controlledSwiperTo,setControlledSwiperTo] = useState('')
    const [controlledSwiperAgeMax,setControlledSwipeAgerMax] = useState('')

    return (
        <div className='select_age'>
            <div className='select_age_top'>
                <div className='write_page_count'>
                    <p>입장조건 추가</p>
                </div>
                <div className='select_age_title'>
                    <h2>모임에 참여가능한<br/>나이대를 선택해주세요</h2>
                </div>
                <div className='select_age_value'>
                    <h3>{controlledSwiperAgeMin}~{controlledSwiperAgeMax}</h3>
                    <h5>만 참여할 수 있는 모임이에요</h5>
                </div>
            </div>
            <div className='age'>
                <AgePicker
                controlledSwiperAgeMin={controlledSwiperAgeMin} setControlledSwiperAgeMin={setControlledSwiperAgeMin}
                controlledSwiperTo={controlledSwiperTo} setControlledSwiperTo={setControlledSwiperTo}
                controlledSwiperAgeMax={controlledSwiperAgeMax} setControlledSwipeAgerMax={setControlledSwipeAgerMax}
                />
            </div>
            
            <div className='select_age_bottom'>
                <div className='next'>
                    <h4>입 력</h4>
                </div>
            </div>
        </div>
    )
}

export default SelectAge;
