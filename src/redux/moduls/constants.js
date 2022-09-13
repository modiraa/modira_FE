import produce from 'immer';

// Actions
const INIT_TEST = 'test/INIT_TEST';


const initialState = {
  testList:[],
};

// Action Creators(액션 생성 함수 만들어주는 곳)
export function initAction() {
    return {
      type: INIT_TEST,
    };
  }

// reducer
const testReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INIT_TEST:
        draft.testList = initialState.testList;
        break;
    }
  });

export default testReducer;
