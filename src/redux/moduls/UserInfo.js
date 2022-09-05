import { act } from "react-dom/test-utils";

// Actions
const USERINFO = "login/USERINFO";

const initialState = {
  userProfileImage: "",
  ProfileImg:"",
  nickName: "",
  age: "",
  gender: "",
  address: "",
  username:"",
};

// Action Creators(액션 생성 함수 만들어주는 곳)
export function loginUserinfo(login) {
  console.log("1",login)
  // 액션 생성 함수는 액션 객체를 리턴해줘야 됨 / ()안에는 추가할 값
  return { type: USERINFO, login: login }; // 딕셔너리 형(앞에는 액션타입 뒤에는 무엇을 추가해!라는 내용)
}
// { type: 'user/LOGIN', user: user };

// reducer
export default function reducer(state = initialState, action = {}) {
  // 파라미터 = {} : 기본값을 주는것 (파라미터에 값이 안들어온다면 빈 딕셔너리 일거라는것을 알려주는것, 오류막기 )
  switch (
    action.type //switch case : ~~할때 ~~해!
  ) {
    case "login/USERINFO": // case안에서 return해주는 어떤 값이 새로운 state값이 됨!
      // console.log("여기는 Reducer", action.login);
      
      return action.login;

    default:
      return state;
  }
}
