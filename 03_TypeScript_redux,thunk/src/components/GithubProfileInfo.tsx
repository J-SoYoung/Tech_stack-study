import React from 'react';
import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

function GithubProfileInfo({ name, thumbnail, bio, blog }: GithubProfileInfoProps) {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thumbnail" />
        <div className="name">{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
    </div>
  );
}

export default GithubProfileInfo;

// 이 컴포넌트에서는 이름, 프로필 사진, 자기소개, 그리고 블로그 링크를 보여줍니다. 
// 블로그 링크의 경우엔 없는 경우도 있으니 있을 때에만 렌더링하도록 설정해주었습니다.