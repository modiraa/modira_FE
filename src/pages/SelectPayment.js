import React from 'react';
import '../css(subin)/WriteSelect.css';

const WriteSelect = () => {

    return (
        <div className='write_select'>
            <div className='WriteSelect_top'>
                <div className='write_page_count'>
                    <p>6/6</p>
                </div>
                <div className='write_top_title'>
                    <h2>모임 정산은<br/>어떻게 하고 싶은가요?</h2>
                </div>
                <div className='write_top_value'>
                    <h3>N빵</h3>
                    <h5>으로 정산하는 모임이에요</h5>
                </div>
            </div>
            <div className='payment'>
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
