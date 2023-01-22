import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// page 요청 함수 생성
// 무한스크롤, 무한쿼리는 페이지네이션의 결과물이다.
// 한번에 한 페이지의 내용만 가져온다.
// 비동기로 서버에 요청하고, pageParam을 1로 기본설정 한다
// 옵션 매개변수가 주어지지 않으면 빈 객체가 될것 ==>? 옵션 매개변수는 뭘 뜻하는걸까
// 함수 결과를 await 으로 받는다. 매개변수를 page에 관한 매개변수를 제공해야 한다
export const getPostPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/posts?_page=${pageParam}`, options);
  return response.data
};
