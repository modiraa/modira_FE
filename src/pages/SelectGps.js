import React, { useEffect } from 'react';
import Mapgps from '../components/selectgps/Mapgps';
import '../css(subin)/SelectGps.css';
import { useDispatch } from "react-redux";
import { selectWrite } from '../redux/moduls/SelectWrite';
import { useNavigate } from 'react-router-dom';
import MyIcon from '../element/MyIcon';

const SelectGps = () => {

    const navigate = useNavigate();

    const [menuSearch, setMenuSearch] = React.useState();
    console.log(menuSearch)

    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(selectWrite({address:menuSearch}))
    // },[menuSearch])

    return (
        <div className='select_gps'>
            <div className='select_gps_top'>
                <div className='select-close' onClick={() => { navigate("/write") }}>
                    <MyIcon iconName={"close"} sizePx={32} color={"gray"} cursor={"point"}/>
                </div>
                <div className='select_gps_count'>
                    <p>3 / 6</p>
                </div>
                <div className='select_gps_title'>
                    <h2>방문할 식당 위치를<br />입력해주세요</h2>
                </div>
                <div className='select_gps_value'>
                    <MyIcon iconName={"place"} sizePx={28} color={"beige"}/>
                    <p>{menuSearch}</p>
                </div>
            </div>
            <div className='mapgps'>
                <Mapgps menuSearch={menuSearch} setMenuSearch={setMenuSearch} />
            </div>

            <div className='select_gps_bottom'>
                <div className="search-bg" />
                <div className='gps-search-icon'>
                    <MyIcon iconName={"search"} sizePx={22} color={"gray"} className='search_icon'/>
                </div>
                <input placeholder='주소를 입력해주세요' onChange={(e) => { setMenuSearch(e.target.value) }}
                    style={{
                        position: "absolute", zIndex: "4", top: "15%", left: "7.5%",right: "7.5%" ,width: "85%",
                        height: "3.0625rem", borderRadius: "2.1875rem", border: "none", fontSize: "1.1875rem"
                        , paddingLeft: "3.125rem", boxSizing: "border-box"
                    }} />
            </div>
        </div>
    )
}

export default SelectGps;
