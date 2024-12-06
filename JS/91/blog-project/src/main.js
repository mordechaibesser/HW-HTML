import axios from 'axios';
import { fetchUsers, fetchPosts } from './services.js';

const app = document.getElementById('app');


fetchUsers(app);
