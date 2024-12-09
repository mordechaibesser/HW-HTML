
export const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch users');
    }
  };
  
  // Fetch posts by user ID
  export const fetchPostsByUser = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Error fetching posts');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch posts');
    }
  };
  
  // Fetch comments by post ID
  export const fetchCommentsByPost = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      if (!response.ok) {
        throw new Error('Error fetching comments');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch comments');
    }
  };
  