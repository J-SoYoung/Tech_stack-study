import React from "react";

// forwardRef : 컴포넌트를 통해 자식에게 ref를 자동으로 전달함
// 마지막 결과물임을 알아야 다음 데이터를 받아올 수 있
const ExPost = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>POST-ID : {post.id}</p>
    </>
  );

  // 전달된 ref가 있는지 확인한다.( = ref는 마지막 페이지의 여부.)
  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

export default ExPost;
