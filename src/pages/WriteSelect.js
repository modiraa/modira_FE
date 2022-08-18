import React from 'react';
import Test from '../components/Test';
import '../css(subin)/WriteSelect.css';

const WriteSelect = () => {

    return (
        <div className='write_select'>
            <div className='WriteSelect_top'>
                <div className='write_page_count'>
                    <p>3/6</p>
                </div>
                <div className='write_top_title'>
                    <h2>모임을 원하는<br/>시간을 알려주세요</h2>
                </div>
                <div className='write_top_value'>
                    <h3>오후 2시 30분</h3>
                    <h5>에 만나는 모임이에요</h5>
                </div>
            </div>
            <Test/>
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
