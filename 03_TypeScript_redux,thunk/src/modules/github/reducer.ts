import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null
  }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: state => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default github;

// 리듀서 작성 후, github 디렉터리에 index.ts 를 만들어
// 리듀서, 액션, 타입, thunk 함수를 불러와 export.