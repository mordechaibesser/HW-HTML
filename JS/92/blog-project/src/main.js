import axios from 'axios';

const app = document.getElementById('app');

let posts = [];
let currentPage = 0;


async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    displayUsers(response.data);
  } catch (error) {
    app.innerHTML = `<p>Error fetching users: ${error.message}</p>`;
  }
}


function displayUsers(users) {
  app.innerHTML = `
    <h1>Blogs</h1>
    <ul>
      ${users
        .map(
          (user) => `
          <li>
            <strong>${user.name}</strong> 
            <p>Website: <a href="${user.website}" target="_blank">${user.website}</a></p>
            <p>Company: ${user.company.name}</p>
            <button onclick="viewPosts(${user.id})">View Posts</button>
          </li>`
        )
        .join('')}
    </ul>
  `;
}


async function viewPosts(userId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    displayPosts(response.data);
  } catch (error) {
    app.innerHTML = `<p>Error fetching posts: ${error.message}</p>`;
  }
}

function displayPosts(fetchedPosts) {
  posts = fetchedPosts;
  renderPage();
}

function renderPage() {
  const paginatedPosts = posts.slice(currentPage * 3, currentPage * 3 + 3);

  app.innerHTML = `
    <button onclick="fetchUsers()">Back to Blogs</button>
    <h2>Posts</h2>
    <ul>
      ${paginatedPosts
        .map(
          (post) => `
            <li>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <button onclick="toggleComments(${post.id})">Show Comments</button>
              <div id="comments-${post.id}"></div>
            </li>`
        )
        .join('')}
    </ul>
    <button ${currentPage === 0 ? 'disabled' : ''} onclick="prevPage()">Previous</button>
    <button ${currentPage === Math.ceil(posts.length / 3) - 1 ? 'disabled' : ''} onclick="nextPage()">Next</button>
  `;
}

window.prevPage = function () {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
};

window.nextPage = function () {
  if (currentPage < Math.ceil(posts.length / 3) - 1) {
    currentPage++;
    renderPage();
  }
};


async function toggleComments(postId) {
  const commentsDiv = document.getElementById(`comments-${postId}`);

  if (commentsDiv.innerHTML) {
    commentsDiv.innerHTML = ''; 
  } else {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      commentsDiv.innerHTML = `
        <ul>
          ${response.data
            .map(
              (comment) => `
                <li>
                  <strong>${comment.name}:</strong> ${comment.body}
                  <p>By: ${comment.email}</p>
                </li>`
            )
            .join('')}
        </ul>
      `;
    } catch (error) {
      commentsDiv.innerHTML = `<p>Error fetching comments: ${error.message}</p>`;
    }
  }
}

window.fetchUsers = fetchUsers;
window.viewPosts = viewPosts;
window.toggleComments = toggleComments;


fetchUsers();
