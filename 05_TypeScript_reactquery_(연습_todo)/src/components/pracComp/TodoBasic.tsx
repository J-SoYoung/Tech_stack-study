import React from "react";

// data가 넘어오면... 배열 안에 들은 객체 형태로 올것이니까.
// 타입을 지정해놓음.
// 부모컴포넌트에서 axios의 undefined의 값을 처리하지 못해서 아직 못함

type DataProps = {
  data: [];
  text: string;
  done: boolean;
  id: number;
};

const TodoBasic = ({ data }: DataProps) => {
  // const TodoBasic = () => {
  return (
    <>
      <p>todoBasic</p>
      {/* {data
        ? data?.data.map((d: any) => {
            return (
              <div key={d.id}>
                <p>{d.text}</p>
                <button
                  onClick={() => {
                    handleDelete(d.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    handleEdit(d.id);
                  }}
                >
                  수정
                </button>
              </div>
            );
          })
        : 
        null} */}
    </>
  );
};

export default TodoBasic;
