import { selectUser, selectPost } from './main.js';


export const renderUsers = (users) => {
  const usersContainer = document.querySelector('#users-container');
  usersContainer.innerHTML = ''; // Clear the container first
  users.forEach(user => {
    const userElement = document.createElement('li');
    userElement.textContent = user.name;
    userElement.addEventListener('click', () => selectUser(user.id));
    usersContainer.appendChild(userElement);
  });
};


export const renderPosts = (posts) => {
  const postsContainer = document.querySelector('#posts-container');
  postsContainer.innerHTML = ''; // Clear the container first
  posts.forEach(post => {
    const postElement = document.createElement('li');
    postElement.textContent = post.title;
    postElement.addEventListener('click', () => selectPost(post.id));
    postsContainer.appendChild(postElement);
  });
  document.querySelector('#back-button').style.display = 'inline'; // Show the back button
};


export const renderComments = (comments) => {
  const commentsContainer = document.querySelector('#comments-container');
  commentsContainer.innerHTML = ''; 
  comments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `
      <p><strong>${comment.name}</strong></p>
      <p>${comment.body}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
};
