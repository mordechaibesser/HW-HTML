function renderPage() {
    const hash = location.hash;
  
    if (hash.startsWith('#user/')) {
      const userId = hash.split('/')[1];
      renderUserPage(userId);
    } else {
      renderMainPage();
    }
  }
  
  async function renderMainPage() {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Loading Users...</h2>';
  
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  
    content.innerHTML = `
      <h2>Users</h2>
      ${users.map(user => `
        <div>
          <h3>${user.name}</h3>
          <button onclick="viewUser(${user.id})">View Details</button>
        </div>
      `).join('')}
    `;
  }
  
  function viewUser(userId) {
    location.hash = `user/${userId}`;
  }
  
  async function renderUserPage(userId) {
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Loading User Details...</h2>';
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
  
    content.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <button onclick="fetchUserPosts(${user.id})">View Posts</button>
      <div id="posts"></div>
      <button onclick="goBack()">Back to Users</button>
    `;
  }
  
  async function fetchUserPosts(userId) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<h3>Loading Posts...</h3>';
  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
  
    postsDiv.innerHTML = `
      <h3>${posts.length} Posts:</h3>
      <ul>
        ${posts.map(post => `<li>${post.title}</li>`).join('')}
      </ul>
    `;
  }
  
  function goBack() {
    location.hash = '';
  }
  
  window.addEventListener('hashchange', renderPage);
  renderPage();
  