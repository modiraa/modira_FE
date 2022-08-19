import React from 'react';
import Mapgps from '../components/Mapgps';
import '../css(subin)/SelectGps.css';

const SelectGps = () => {

    const [menuSearch, setMenuSearch] = React.useState();
    console.log(menuSearch)

    return (
        <div className='select_gps'>
            <div className='select_gps_top'>
                <div className='select_gps_count'>
                    <p>3/6</p>
                </div>
                <div className='select_gps_title'>
                    <h2>방문할 식당 위치를<br />입력해주세요</h2>
                </div>
                <div className='select_gps_value'>
                    <span className="material-icons-outlined">
                        place
                    </span>
                    <p>{menuSearch}</p>
                </div>
            </div>
            <div className='mapgps'>
                <Mapgps menuSearch={menuSearch} setMenuSearch={setMenuSearch} />
            </div>

            <div className='select_gps_bottom'>
                <div className="search-bg" />
                <span className="material-icons-outlined">
                    search
                </span>
                <input placeholder='주소를 입력해주세요' onChange={(e) => { setMenuSearch(e.target.value) }}
                    style={{
                        position: "absolute", zIndex: "4", top: "15%", left: "7%", width: "445px",
                        height: "49px", borderRadius: "35px", border: "none", fontSize: "19px"
                        , paddingLeft: "50px", boxSizing: "border-box"
                    }} />
            </div>
        </div>
    )
}

export default SelectGps;