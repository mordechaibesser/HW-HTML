

import { fetchUsers, fetchPostsByUser, fetchCommentsByPost } from './services.js';
import { renderUsers, renderPosts, renderComments } from './views.js';

let selectedUserId = null;
let selectedPostId = null;

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
});


const loadUsers = async () => {
  try {
    const users = await fetchUsers();
    renderUsers(users);
  } catch (error) {
    alert('Error loading users');
  }
};


const selectUser = async (userId) => {
  selectedUserId = userId;
  try {
    const posts = await fetchPostsByUser(userId);
    renderPosts(posts);
  } catch (error) {
    alert('Error loading posts');
  }
};


const selectPost = async (postId) => {
  selectedPostId = postId;
  try {
    const comments = await fetchCommentsByPost(postId);
    renderComments(comments);
  } catch (error) {
    alert('Error loading comments');
  }
};


const goBackToUsers = () => {
  selectedUserId = null;
  selectedPostId = null;
  loadUsers();
};


document.querySelector('#back-button').addEventListener('click', goBackToUsers);

export { selectUser, selectPost };
