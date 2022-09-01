import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {userLogin} from '../redux/moduls/UserName';
import { loginUserinfo } from '../redux/moduls/UserInfo';

const NaverRedirect = () => {
    const navigate = useNavigate();

    let dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");
    let state = new URL(window.location.href).searchParams.get("state");

    const test = async () => {
        await axios.get(`http://3.34.129.164/login/ouath2/code/naver?code=${code}&state=${state}`)
            .then((res) => {
                console.log(res); // 토큰이 넘어올 것임

                const ACCESS_TOKEN = "Bearer"+" "+res.data.accessToken;

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
                // navigate("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
            })
    }

    React.useEffect(() => {
        console.log(code, state)
        test()
    }, [])

    return (
        <div>
            네이버 리다이렉트
        </div>
    )
}

export default NaverRedirect;
