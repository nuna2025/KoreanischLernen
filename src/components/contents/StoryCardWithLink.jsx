import React from "react";
import StoryCard from "./story/StoryCard";

const StoryCardWithLink = ({ story }) => {
  return (
    <a
      href={story.link} // story 객체에 link 필드를 추가
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }} // 기본 스타일 유지
    >
      <StoryCard story={story} />
    </a>
  );
};

export default StoryCardWithLink;
