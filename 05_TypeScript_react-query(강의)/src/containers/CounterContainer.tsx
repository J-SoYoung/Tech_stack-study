import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';
// import Counter from '../components/Counter';

export const CounterContainer = () =>{
  const dispatch = useDispatch()

  // 상태를 조회합니다. 상태를 조회 할 때에는 
  // state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.count);
  console.log(count)
  
  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  
  
return (
  <div style={{padding:'30px'}}>
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  </div>
  );
};