
import React from "react";

const Post = ({ post, onBack }) => {
  if (!post) {
    return <div>No post selected!</div>;
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={onBack} style={{ marginTop: "1rem" }}>
        Back to Posts
      </button>
    </div>
  );
};

export default Post;
