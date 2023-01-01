import { FC } from 'react';

// 객체를 설명하는 기본단위 
// ?인 옵셔널을 붙였으므로, 모든 정보는 선택적으로 변한다
interface Props {
  name: string;
  age: number;
  email: string;
}

export const Person : FC<Props> = ({name, email, age}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
}

// export const Person = (props: Props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// }

// export const Person = ({name, email, age}: Props) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{email}</h1>
//     </div>
//   );
// }