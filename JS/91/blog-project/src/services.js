import axios from 'axios';
import { displayUsers, displayPosts } from './views.js';


export async function fetchUsers(app) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    displayUsers(app, response.data);
  } catch (error) {
    app.innerHTML = `<p>Error loading users: ${error.message}</p>`;
  }
}

export async function fetchPosts(app, userId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    displayPosts(app, response.data, userId);
  } catch (error) {
    app.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
  }
}
