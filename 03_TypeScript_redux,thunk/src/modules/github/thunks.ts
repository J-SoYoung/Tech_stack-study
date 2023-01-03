import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';

export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
  return async dispatch => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (error) {
    }
  };
}

// ThunkAction 의 Generics으로는 다음 값들을 순서대로 넣어주어야 합니다.
// <TReturnType, TState, TExtraThunkArg, TBasicAction>
// generics : 단일 타입이 아닌 다양한 타입에서 작동하는 컴포넌트 작성가능

// TReturnType (void): thunk 함수에서 반환하는 값의 타입을 설정.
// TState (RootState): 스토어의 상태에 대한 타입을 설정.
// TExtraThunkArg (null): redux-thunk의 Extra Argument의 타입 설정.
// TBasicAction(GithubAction): dispatch 할 수 있는 액션들의 타입 설정.

// TReturnType 의 경우 아무것도 반환하지 않는다면 void 라고 넣으시면 됩니다.
// 현재 상황에서는 thunk 함수에서 async 를 사용하고 있으니 
// Promise<void>가 더 정확함. 하지만 그냥 void 라고 입력해도 문제 되지않음.
