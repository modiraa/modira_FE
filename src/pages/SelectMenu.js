import React from 'react';
import '../css(subin)/WriteSelect.css';

const WriteSelect = () => {

    return (
        <div className='write_select'>
            <div className='WriteSelect_top'>
                <div className='write_page_count'>
                    <p>5/6</p>
                </div>
                <div className='write_top_title'>
                    <h2>함께 드실 음식은<br/>무엇인가요?</h2>
                </div>
                <div className='write_top_value'>
                    <h3>일 식</h3>
                    <h5>을 먹는 모임이에요</h5>
                </div>
            </div>
            <div className='menu'>

            </div>
            
            <div className='WriteSelect_bottom'>
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

export default WriteSelect;
