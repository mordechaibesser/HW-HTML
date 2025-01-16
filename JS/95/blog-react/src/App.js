import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (selectedUser && !selectedUser.comments) {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${selectedUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedUser((prevUser) => ({
            ...prevUser,
            comments: data,
          }));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setLoading(false);
        });
    }
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };


  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Blog Application</h1>

     
      <div className="user-container">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-box"
            onClick={() => handleUserClick(user)}
          >
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">{user.email}</p>
          </div>
        ))}
      </div>

      {selectedUser && selectedUser.comments && (
        <div className="comments-section">
          <h2>Comments by {selectedUser.name}</h2>
          <ul>
            {selectedUser.comments.map((comment) => (
              <li key={comment.id}>
                <p><strong>{comment.name}</strong></p>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
