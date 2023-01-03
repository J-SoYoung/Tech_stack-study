// 버전에러
import { createAsyncAction } from 'typesafe-actions';
// import { deprecated, ActionType, createReducer } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// const { createAction, createStandardAction } = deprecated
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();


// 여기서 GET_USER_PROFILE 의 용도는 요청이 시작됐을 때 디스패치되는 액션, 
// 나머지 두개의 액션들은 성공 / 실패 했을때 디스패치되는 액션들입니다.