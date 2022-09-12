import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {loginUserinfo} from '../redux/moduls/UserInfo';

const Kakaoredirect = ({userName}) => {
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

            if(res.data.id===null){
                navigate("/register",{ state: { username: res.data.username} });
                // dispatch(loginUserinfo({username:res.data.username}))
            }
            else{
                navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
                // dispatch(userLogin(res.data.username))
                sessionStorage.setItem("token",ACCESS_TOKEN)
                dispatch(loginUserinfo(res.data))
            }
            
            }).catch((err) => {
            console.log("소셜로그인 에러", err);
            alert('다시 로그인 시도해주세요')
            navigate('/');
            })
    }

    React.useEffect(()=>{
        test()
    },[])

    return (
        <div>
            
        </div>
    )
}

export default Kakaoredirect;
