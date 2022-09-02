
// Actions
const WRITE = 'select/WRITE';

const initialState = {
    writeTitle: '',
    writeText: '',
    date: '',
    time: '',
    address: '',
    latitude: '',
    longitude: '',
    numberOfPeople: '',
    menu: '',
    category: '',
    gender:'모든성별',
    age:'모든나이'
}

// Action Creators(액션 생성 함수 만들어주는 곳)
export function selectWrite(select) { // 액션 생성 함수는 액션 객체를 리턴해줘야 됨 / ()안에는 추가할 값
    console.log("여기는 action creators",select)
    return { type: WRITE, select:select }; // 딕셔너리 형(앞에는 액션타입 뒤에는 무엇을 추가해!라는 내용)
}
// { type: 'user/LOGIN', user: user };

// reducer
export default function reducer(state = initialState, action = {}) { // 파라미터 = {} : 기본값을 주는것 (파라미터에 값이 안들어온다면 빈 딕셔너리 일거라는것을 알려주는것, 오류막기 )
    switch (action.type) { //switch case : ~~할때 ~~해!
        case "select/WRITE":  // case안에서 return해주는 어떤 값이 새로운 state값이 됨!
            console.log("여기는 Reducer",action.select)
            const new_list = {
                ...state,
                ...action.select
            }
            console.log(new_list)
            return new_list;

        default:
            return state;
    }
}

// 1.case를 8개 만드는 상황이 나올수도 있다.
// 2..case를 1개로 만들어야한다.
// 3. 1월만 보내지말고, 1월의 key값도 같이 보내세요~
// 4. console 많이 찍어세요~

// 초기값:{
// date: 1월
// time: 1시
// gender:
// location:

// }

// dispatch({date:1월})
// dispatch(1시)


// reducer(state,payload)

// case {datatype:COLLECTWRITEDATA}:


// return({...state,date:payload.date})

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }