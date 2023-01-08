import { useState } from "react";
import { useQuery } from "react-query";
import { getPosts, useAddPost, useDelPost } from "./apiNote";
import { Posts } from "./Type";

export default function Note() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  // const [posts, setPosts] = useState<Posts[] | null>(null);

  const [editPost, setEditPost] = useState(false);

  const { data, isLoading, isError } = useQuery(["posts"], () => {
    return getPosts();
  });

  const { mutate: addPostMutate } = useAddPost();
  const handlePostAdd = () => {
    const addPostInput = {
      title: title,
      author: author,
      description: description,
    };
    addPostMutate(addPostInput);
  };

  const { mutate: delPostMutate } = useDelPost();
  const handleDelPost = (id: number) => {
    delPostMutate(id);
  };

  return (
    <div style={{ width: "700px" }}>
      <h2>소영</h2>
      <div>
        <input
          type="text"
          value={title}
          placeholder="제목"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="작가"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="내용"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handlePostAdd}>추가</button>
      </div>
      {data
        ? data.data.map((d: any) => {
            return (
              <div
                key={d.id}
                style={{
                  border: "1px solid red",
                  margin: "10px",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <p>제목: {d.title}</p>
                <p>작가: {d.author}</p>
                <p>내용: {d.description}</p>
                <button
                  onClick={() => {
                    handleDelPost(d.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={(e) => {
                    setEditPost(!editPost);
                  }}
                >
                  수정
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
}

// "id": 3,
// "title": "게시물3",
// "author": "끼리끼리",
// "description": "애기 소
