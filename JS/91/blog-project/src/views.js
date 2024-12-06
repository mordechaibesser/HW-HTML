import { fetchPosts } from './services.js';

export function displayUsers(app, users) {
  app.innerHTML = `
    <h1>Blogs</h1>
    <ul>
      ${users
        .map(
          (user) => `
        <li>
          <strong>${user.name}</strong> (<a href="http://${user.website}" target="_blank">${user.website}</a>)
          <p>Company: ${user.company.name}</p>
          <button onclick="viewPosts(${user.id})">View Posts</button>
        </li>`
        )
        .join('')}
    </ul>
  `;

  // Attach the viewPosts function to the global window
  window.viewPosts = (userId) => fetchPosts(app, userId);
}

export function displayPosts(app, posts, userId) {
  let currentPage = 0;

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
      <button ${currentPage >= Math.ceil(posts.length / 3) - 1 ? 'disabled' : ''} onclick="nextPage()">Next</button>
    `;

    // Attach global functions
    window.prevPage = () => {
      if (currentPage > 0) {
        currentPage--;
        renderPage();
      }
    };

    window.nextPage = () => {
      if (currentPage < Math.ceil(posts.length / 3) - 1) {
        currentPage++;
        renderPage();
      }
    };

    window.toggleComments = async (postId) => {
      const commentsDiv = document.getElementById(`comments-${postId}`);
      if (commentsDiv.innerHTML) {
        commentsDiv.innerHTML = ''; // Hide comments
      } else {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
          commentsDiv.innerHTML = `
            <ul>
              ${response.data
                .map(
                  (comment) => `
                <li>
                  <strong>${comment.name}</strong>: ${comment.body}
                  <p>By: ${comment.email}</p>
                </li>`
                )
                .join('')}
            </ul>
          `;
        } catch (error) {
          commentsDiv.innerHTML = `<p>Error loading comments: ${error.message}</p>`;
        }
      }
    };
  }

  renderPage();
}
