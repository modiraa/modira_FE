import React, { useState } from 'react';
import '../css(subin)/SelectGender.css';
import GenderPicker from '../components/GenderPicker';
import { useDispatch,useSelector } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';

const SelectGender = () => {

    const [controlledSwiperGender,setControlledSwiperGender] = useState('여성')

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickGender = () => {
        dispatch(selectWrite({gender:controlledSwiperGender}))
        navigate("/write")
    }

    return (
        <div className='select_gender'>
            <div className='select_gender_top'>
                <div className='select-close'>
                    <span className="material-icons" onClick={() => { navigate("/write") }}>
                        close
                    </span>
                </div>
                <div className='select_gender_count'>
                    <p>입장조건 추가</p>
                </div>
                <div className='select_gender_title'>
                    <h2>모임에 참여가능한<br/>성별을 선택해주세요</h2>
                </div>
                <div className='select_gender_value'>
                    <h3>{controlledSwiperGender}</h3>
                    <h5>만 참여할 수 있는 모임이에요</h5>
                </div>
            </div>
            <div className='gender'>
                <GenderPicker controlledSwiperGender={controlledSwiperGender} setControlledSwiperGender={setControlledSwiperGender}/>
            </div>
            
            <div className='select_gender_bottom' onClick={clickGender}>
                <div className='next'>
                    <h4>입력</h4>
                </div>
            </div>
        </div>
    )
}

export default SelectGender;
