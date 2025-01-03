import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import BlogList from './BlogList';
import PostDetail from './PostDetail';
import Pagination from './Pagination';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setBlogs(res.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <h1>Blog Site</h1>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          {/* Home route displaying blogs */}
          <Route
            path="/"
            element={
              <>
                {loading ? <p>Loading...</p> : <BlogList blogs={currentPosts} />}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={blogs.length}
                  paginate={paginate}
                />
              </>
            }
          />
          {/* About route (could be a simple placeholder page) */}
          <Route path="/about" element={<div>About Us</div>} />
          
          {/* Post Detail route to show individual post */}
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
