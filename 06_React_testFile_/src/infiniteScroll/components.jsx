import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => {
  const res = await axios.get(`http://localhost:3005/posts`);
  return res;
};
export const DataList = () => {
  const { data, isLoading, isError } = useQuery(["posts"], getPosts);
  console.log(data);
  return data;
  // const list = data?.data.map((d) => {
  //   return (
  //     <>
  //       <p>d.title</p>
  //       <p>d.content</p>
  //     </>
  //   );
  // });
};
