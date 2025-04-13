import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import FeedPostCard from "./FeedPostCard";

export const Posts = () => {
  const posts = [
    { title: "Pipe Fix", updated: "today", user: "Andrei Popa", skill: "Plumber" },
    { title: "Light Check", updated: "yesterday", user: "Maria Ionescu", skill: "Electrician" },
    { title: "Tailor Fit", updated: "2 days ago", user: "Luca Enache", skill: "Tailor" },

  ];

  return (
    <div className="posts">
      <div className="posts-grid">
        {posts.map((p, i) => (
          <FeedPostCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Posts;