import React from 'react';
import '../css(subin)/WriteSelect.css';

const WriteSelect = () => {

    return (
        <div className='write_select'>
            <div className='WriteSelect_top'>
                <div className='write_page_count'>
                    <p>입장조건 추가</p>
                </div>
                <div className='write_top_title'>
                    <h2>모임에 참여가능한<br/>나이대를 선택해주세요</h2>
                </div>
                <div className='write_top_value'>
                    <h3>10대~30대</h3>
                    <h5>만 참여할 수 있는 모임이에요</h5>
                </div>
            </div>
            <div className='age'>
            </div>
            
            <div className='WriteSelect_bottom'>
                {/* <div className='prev'>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    <h4>이전</h4>
                </div> */}
                <div className='next'>
                    <h4>입력</h4>
                </div>
            </div>
        </div>
    )
}

export default WriteSelect;
