import React from "react";

type TestProps = {
  testText: string;
  extraText?: string;
};
const PropsTest = ({ testText, extraText }: TestProps) => {
  return (
    <>
      <div>{testText}</div>
      {/* 선택적 속성 => 조건부 렌더링을 이용해 text를 출력함 */}
      {extraText && <p>{extraText}</p>}
    </>
  );
};

export default PropsTest;
