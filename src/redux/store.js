//store는 Reducer을 뭉친 rootReducer로 만든다.

import {createStore, combineReducers} from "redux";
import userName from "./moduls/UserName.js"; // 리듀셔 가져오고
import SelectWrite from "./moduls/SelectWrite.js"; // 리듀셔 가져오고

const rootReducer = combineReducers({userName,SelectWrite}); //리듀서들을 묶어준다.(지금은 하나밖에 없어서 하나만)

// rootReducer랑 createStore 엮어서 store 만들어줌
const store = createStore(rootReducer);

export default store;