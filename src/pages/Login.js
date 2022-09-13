import '../css(subin)/Login.css';

import React from "react";
import { KAKAO_AUTH_URL } from "../components/OauthKakao";
import { NAVER_AUTH_URL } from "../components/OauthNaver";
import loginBg from '../image/loginBg.png';
import loginLogo from '../image/logo.png';
import { useNavigate } from 'react-router-dom';
import MyIcon from '../element/MyIcon';
import kakaoLogin from '../image/kakaologin.png';
import naverLogin from '../image/naverlogin.png';

// kakao 로그인 참고 : https://data-jj.tistory.com/53
// naver 로그인 참고 : https://velog.io/@sssssssssy/%EB%84%A4%EC%9D%B4%EB%B2%84%EB%A1%9C%EA%B7%B8%EC%9D%B8
// google 로그인 참고 : https://velog.io/@nuri00/Google-OAuth-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84

// 흐름참고
// 1. 프론트엔드에서 OAuth 로그인을 요청한다.
// 2. 구글 서버에서 인가코드를 발행한다 (Access Token)
// 3. 받은 인가 코드를 백엔드에 보내준다.
// 4. 인가코드를 이용하여 구글 서버에 사용자의 정보를 요청한다.
// 5. 올바른 인가코드를 받은 구글 서버는 해당 사용자의 정보를 제공한다.

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className='login-bg'>
        <img src={loginBg}/>
      </div>
      <div className='login_top'>
        <div className='login-material-symbols-outlined' onClick={() => { navigate("/") }}>
          <MyIcon iconName={"arrow_back"} sizePx={40} color={"black"} cursor={"point"}/>
        </div>
        <div className="login_text">
          <h1>이제 혼밥하지 마세요!</h1>
          <h1>밥친구 찾기 플랫폼</h1>
        </div>
        <div className='logo'>
          <img src={loginLogo} />
        </div>
      </div>
      <div className='login_bottom'>
        <h3>
          SNS 계정으로 간편 가입하기
        </h3>
        <div className='login_btns'>
          <div className='kakao_btn'>
            <img src={kakaoLogin}/>
            <a className="kakao" href={KAKAO_AUTH_URL}>
              카카오톡으로 시작하기
            </a>
          </div>
          <div className='naver_btn'>
            <img src={naverLogin}/>
            <a className="naverIdLogin" href={NAVER_AUTH_URL}>
              네이버로 시작하기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;