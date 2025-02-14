import express from 'express';
import mysql from 'mysql2/promise';
import Joi from 'joi';

const router = express.Router();

// Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // Change to your DB username
    password: '',  // Change to your DB password
    database: 'recipes_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Validation schema using Joi
const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(6).required()
});

// GET register page
router.get('/register', (req, res) => {
    res.send(`
        <h2>Register</h2>
        <form method="POST">
            <label>Username: <input type="text" name="username"></label><br>
            <label>Password: <input type="password" name="password"></label><br>
            <button type="submit">Register</button>
        </form>
    `);
});

// POST register (handles form submission)
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Validate user input
    const { error } = schema.validate({ username, password });
    if (error) {
        return res.status(400).send(`<h3>Invalid Input: ${error.details[0].message}</h3>`);
    }

    try {
        const connection = await pool.getConnection();

        // Check if username already exists
        const [existingUser] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            connection.release();
            return res.status(400).send('<h3>Username already taken. Choose another.</h3>');
        }

        // Insert new user (temporarily storing raw password)
        await connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);

        connection.release();

        // Redirect to login page after successful registration
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('<h3>Server error. Please try again.</h3>');
    }
});

export default router;
