import React,{useEffect,useRef} from 'react'

const { kakao } = window;
const MapgpsForDetail = ({latitude,longitude}) => {
    const refMap=useRef(null);
console.log(latitude,longitude,"지도안에서 데이터가 들어왔는가")
let lat = String(latitude)
let lon = String(longitude)
console.log(lat,lon)

    useEffect(() => {
        console.log("오니와주라")
        const container = refMap
		const options = { 
            center: new kakao.maps.LatLng(lon ,lat), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(container.current, options);
        // 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(lon, lat); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

var iwContent = 
`<div style="padding:5px;">식당 위치<br><a href="https://map.kakao.com/link/map/Hello World!,${lon},${lat}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,${lon},${lat}" style="color:blue" target="_blank">길찾기</a></div>`,// 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(lon, lat); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 



    }, [latitude,longitude]);


  return (
   
        <div style={{width:"100%",height:"11.5rem"}}><div ref={refMap} style={{width:"100%",height:"11.5rem"}}></div></div>
   
  )
}

export default MapgpsForDetail