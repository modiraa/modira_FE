import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../redux/moduls/UserName';
import {loginUserinfo} from '../redux/moduls/UserInfo';
import { isCompositeComponent } from 'react-dom/test-utils';

const Kakaoredirect = ({setUserName,userName}) => {
    const navigate = useNavigate();

    console.log(userName);

    let dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");
    console.log(`http://52.79.223.9/auth/kakao/callback?code=${code}`)

    const test = async() =>{
        await axios.get(`http://3.34.129.164/auth/kakao/callback?code=${code}`)
        .then((res) => {
            console.log(res); // 토큰이 넘어올 것임
            
            const ACCESS_TOKEN = "Bearer"+" "+res.headers.authorization;
            
            console.log("token", ACCESS_TOKEN); 
            
            sessionStorage.setItem("token",ACCESS_TOKEN)

            if(res.data.id===null){
                navigate("/register","/myroom",{ state: { username: res.data.username} });
                dispatch(loginUserinfo({username:res.data.username}))
            }
            else{
                navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
                dispatch(userLogin(res.data.username))
            }
            
            }).catch((err) => {
            console.log("소셜로그인 에러", err);
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
