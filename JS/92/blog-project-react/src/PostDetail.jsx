import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const commentsRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        setPost(postRes.data);
        setComments(commentsRes.data);
      } catch (error) {
        console.error('Error fetching the post details:', error);
      }
    };

    fetchPostAndComments();
  }, [id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
