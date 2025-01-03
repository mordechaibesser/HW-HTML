import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>
            <Link to={`/posts/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
