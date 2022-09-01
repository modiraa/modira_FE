import React, { useState } from 'react';
import '../css(subin)/SelectMenu.css';
import MenuPicker from '../components/MenuPicker';
import { useDispatch } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';

const SelectMenu = () => {

    const [controlledSwiperMenu,setControlledSwiperMenu] = useState('한식')

    console.log("여기",controlledSwiperMenu)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const clickMenu = () => {
        dispatch(selectWrite({menu:controlledSwiperMenu}))
        navigate("/selectpayment")
    }

    return (
        <div className='select_menu'>
            <div className='select_menu_top'>
                <div className='select_menu_count'>
                    <p>5 / 6</p>
                </div>
                <div className='select_menu_title'>
                    <h2>함께 드실 음식은<br/>무엇인가요?</h2>
                </div>
                <div className='select_menu_value'>
                    <h3>{controlledSwiperMenu}</h3>
                    <h5>을 먹는 모임이에요</h5>
                </div>
            </div>
            <div className='menu'>
                <MenuPicker controlledSwiperMenu={controlledSwiperMenu} setControlledSwiperMenu={setControlledSwiperMenu}/>
            </div>
            
            <div className='select_menu_bottom'>
                <div className='prev' onClick={()=>{navigate(-1)}}>
                        <div className='menu-arrow-back-ios'>
                            <span className="material-symbols-outlined">
                                arrow_back_ios
                            </span>
                        </div>
                        <h4>이전</h4>
                    </div>
                    <div className='next' onClick={clickMenu}>
                        <h4>다음</h4>
                        <div className='menu-arrow-forward-ios'>
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SelectMenu;
