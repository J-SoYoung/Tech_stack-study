import { ChangeEvent, useState } from 'react';




export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const onIncrease = ()=>{ setCount(count => count +1) } 
  const onDecrease = ()=>{ setCount(count => count -1) } 
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
    </>
  );
}

// Generics
// 다양한 타입에서 작동하는 컴포넌트를 생성할 수 있다 
// https://www.typescriptlang.org/ko/docs/handbook/2/generics.html


