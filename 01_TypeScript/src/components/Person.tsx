import { ChangeEvent, FC, useState } from 'react';

// 객체를 설명하는 기본단위 
// ?인 옵셔널을 붙였으므로, 모든 정보는 선택적으로 변한다

export enum HairColor{
  Blonde = "금발머리다",
  Brown = "갈색 머리다",
  Pink = "핑크머리다"
}

interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
}

export const Person : FC<Props> = ({name, email, age, hairColor}) => {
  // null을 정의하는 방법 
  const [country, setCountry] = useState<string | null> ("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }
  return (
    <div> 
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      {/* typescript에서는 함수와 인수의 유형을 정리해야 함 */}
      {/*onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCountry(e.target.value)}} */}
      <input 
        onChange={handleChange}/>

      {country}
      {HairColor.Pink}
      {/* <input 
        placeholder='뭐적을거'
        onChange={(e)=>{setCountry(e.target.value)}}
      />
      {country} */}
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