import React, { useState } from 'react';
import '../css(subin)/SelectGender.css';
import GenderPicker from '../components/GenderPicker';

const SelectGender = () => {

    const [controlledSwiperGender,setControlledSwiperGender] = useState('')

    return (
        <div className='select_gender'>
            <div className='select_gender_top'>
                <div className='select_gender_count'>
                    <p>입장조건 추가</p>
                </div>
                <div className='select_gender_title'>
                    <h2>모임에 참여가능한<br/>성별을 선택해주세요</h2>
                </div>
                <div className='select_gender_value'>
                    <h3>여 성</h3>
                    <h5>만 참여할 수 있는 모임이에요</h5>
                </div>
            </div>
            <div className='gender'>
                <GenderPicker controlledSwiperGender={controlledSwiperGender} setControlledSwiperGender={setControlledSwiperGender}/>
            </div>
            
            <div className='select_gender_bottom'>
                <div className='next'>
                    <h4>입력</h4>
                </div>
            </div>
        </div>
    )
}

export default SelectGender;
