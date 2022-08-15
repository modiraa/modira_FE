import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Kakaoredirect = () => {
    const navigate = useNavigate();

    let code = new URL(window.location.href).searchParams.get("code");

    const test = async() =>{
        await axios.get(`http://52.79.223.9/auth/kakao/callback?code=${code}`)
        .then((res) => {
            console.log(res); // 토큰이 넘어올 것임
            
            const ACCESS_TOKEN = res.data.accessToken;
            
            console.log("token", ACCESS_TOKEN);    //예시로 로컬에 저장함    
            
            // navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
            
            }).catch((err) => {
            console.log("소셜로그인 에러", err);
            // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
            })
    }

    React.useEffect(()=>{
        console.log(code)
        test()
    },[])

    return (
        <div>
            카카오 리다이렉트
        </div>
    )
}

export default Kakaoredirect;
