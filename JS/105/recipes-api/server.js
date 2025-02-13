import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());  // To parse JSON request bodies
app.use(cors());  // Allow cross-origin requests

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: '',  // Replace with your MySQL password
  database: 'recipes_db'  // Replace with your MySQL database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// CRUD operations

// GET all recipes
app.get('/api/recipes', (req, res) => {
  const query = 'SELECT * FROM recipes';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch recipes' });
      return;
    }
    res.status(200).json(results);
  });
});

// GET a single recipe by ID
app.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM recipes WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch recipe' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Recipe not found' });
      return;
    }
    res.status(200).json(results[0]);
  });
});

// POST a new recipe
app.post('/api/recipes', (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const query = 'INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)';
  db.query(query, [name, ingredients, instructions], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to add recipe' });
      return;
    }
    res.status(201).json({ id: results.insertId, name, ingredients, instructions });
  });
});

// PUT (update) a recipe by ID
app.put('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, ingredients, instructions } = req.body;
  const query = 'UPDATE recipes SET name = ?, ingredients = ?, instructions = ? WHERE id = ?';
  db.query(query, [name, ingredients, instructions, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to update recipe' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Recipe not found' });
      return;
    }
    res.status(200).json({ id, name, ingredients, instructions });
  });
});

// DELETE a recipe by ID
app.delete('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM recipes WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete recipe' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Recipe not found' });
      return;
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
