import React, { useEffect, useState } from "react";
import { fetchData } from "../utils";

const Comments = ({ post, changeView }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`).then(setComments);
  }, [post]);

  return (
    <div>
      <button onClick={() => changeView("posts", post.user)}>Back</button>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
