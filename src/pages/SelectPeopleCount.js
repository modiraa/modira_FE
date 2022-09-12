import React, { useState } from 'react';
import '../css(subin)/SelectPeopleCount.css';
import PeopleCountPicker from '../components/selectpeoplecount/PeopleCountPicker';
import { useDispatch,useSelector } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';
import MyIcon from '../element/MyIcon';

const SelectPeopleCount = () => {

    const [controlledSwiperPeopleCount,setControlledSwiperPeopleCount] = useState('3명')

    console.log("여기",controlledSwiperPeopleCount)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickPeopleCount = () => {
        dispatch(selectWrite({numberOfPeople:controlledSwiperPeopleCount}))
        navigate("/selectmenu")
    }

    return (
        <div className='select_people_count'>
            <div className='select_people_count_top'>
                <div className='select-close'>
                    <MyIcon iconName={"close"} sizePx={32} color={"gray"} cursor={"point"}/>
                </div>
                <div className='select_people_count_count'>
                    <p>4 / 6</p>
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
                <div className='prev' onClick={()=>{navigate(-1)}}>
                        <div className='people-arrow-back-ios'>
                            <MyIcon iconName={"arrow_back_ios"} sizePx={28} color={"gray"} cursor={"point"}/>
                        </div>
                        <h4>이전</h4>
                    </div>
                    <div className='next' onClick={clickPeopleCount}>
                        <h4>다음</h4>
                        <div className='people-arrow-forward-ios'>
                            <MyIcon iconName={"arrow_forward_ios"} sizePx={28} color={"black"} cursor={"point"}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SelectPeopleCount;
