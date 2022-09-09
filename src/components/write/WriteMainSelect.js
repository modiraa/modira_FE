
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectWrite } from '../../redux/moduls/SelectWrite';

const WriteMainSelect = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const storeSelect = useSelector((state) => state.SelectWrite)

    // 작성글 상태관리
    let [boardArray, setBoardArray] = useState({
        writeTitle: '',
        writeText: ''
    });

    // 모임글 제목과 내용 값 저장하기
    const writeTitle_ref = React.useRef(null);
    const writeText_ref = React.useRef(null);

    const { writeTitle, writeText } = boardArray; // 비구조화 할당을 통해 e.target의 value값 추출

    useEffect(() => {
        console.log(boardArray, "유즈effect")
        console.log(storeSelect)
    }, [boardArray])

    useEffect(() => {
        console.log("storage값 확인", storeSelect.writeText, storeSelect)
        if (storeSelect.writeText !== "" || storeSelect.writeTitle !== "") {

            setBoardArray({ ...boardArray, writeText: storeSelect.writeText, writeTitle: storeSelect.writeTitle })
            console.log("여기옴?", { ...boardArray, writeText: storeSelect.writeText, writeTitle: storeSelect.writeTitle })
        }
    }, [])

    const clickSelect = () => {
        navigate("/selectdate")
    }

    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        const dataTitleAndContent = {
            ...boardArray, // 기존의 inputValue 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        }

        setBoardArray(dataTitleAndContent)
        dispatch(selectWrite({ [name]: value }))

        console.log(boardArray)
        console.log(name)
    }


    return (
        <div className='write-center'>
            <div className='write-select'>
                <div className='write_title'>
                    <input type="text" placeholder='글 제목' ref={writeTitle_ref}
                        name="writeTitle" value={writeTitle} onChange={onChange}
                    />
                </div>
                <div className='write_text'>
                    <textarea type="text" placeholder='게시글 내용을 작성해주세요.' ref={writeText_ref}
                        name="writeText" value={writeText} onChange={onChange} />
                </div>
                <div onClick={clickSelect}>
                    <div className='write_address'>
                        <div className='write-address-title'>
                            <h3>장 소</h3>
                            <span className="material-icons-outlined">
                                place
                            </span>
                        </div>
                        <div className='write-address-text'>
                            <span>{storeSelect.address}</span>
                        </div>
                    </div>

                    <div className='write_date'>
                        <div className='write-date-title'>
                            <h3>일 정</h3>
                            <span className="material-icons-outlined">
                                calendar_month
                            </span>
                        </div>
                        <div className='write-date-text'>
                            <span>{storeSelect.date} {storeSelect.time}</span>
                        </div>
                    </div>

                    <div className='write_people_count'>
                        <div className='write-people-count-title'>
                            <h3>참여인원</h3>
                            <span className="material-icons-outlined">
                                perm_identity
                            </span>
                        </div>
                        <div className='write-people-count-text'>
                            <span>{storeSelect.numberOfPeople}</span>
                        </div>
                    </div>

                    <div className='write_menu'>
                        <div className='write-menu-title'>
                            <h3>메 뉴</h3>
                            <span className="material-icons-outlined">
                                ramen_dining
                            </span>
                        </div>
                        <div className='write-menu-text'>
                            <span>{storeSelect.menu}</span>
                        </div>
                    </div>

                    <div className='write_payment'>
                        <div className='write-payment-title'>
                            <h3>모임유형</h3>
                            <span className="material-icons-outlined">
                                groups
                            </span>
                        </div>
                        <div className='write-payment-text'>
                            <span>{storeSelect.category}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default WriteMainSelect
