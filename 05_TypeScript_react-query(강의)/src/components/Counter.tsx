import React from "react";

type CounterProps = {
  count : number;
  onIncrease : () => void;
  onDecrease : () => void;
  onIncreaseBy : (diff: number) => void;
}

function Counter ({
  count, 
  onIncrease,
  onDecrease,
  onIncreaseBy
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={()=> onIncreaseBy(5) }>+5</button>
    </div>
  )
}
// 컴포넌트에서 필요한 값과 함수들을 모두 props 로 받아오게 했습니다. 왜?
// 다들 예제보면 상위 컴포넌트에서 받아오던데.. 특징인가
// 

export default Counter;