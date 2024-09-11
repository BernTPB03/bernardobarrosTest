const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const authenticateToken = require('./authMiddleware'); 
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post('/products', authenticateToken, (req, res) => {
  const { name, description, price, stock } = req.body;

  const sql = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, description, price, stock], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Produto criado com sucesso!' });
  });
});

app.put('/products/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;

  const sql = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
  db.query(sql, [name, description, price, stock, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Produto atualizado com sucesso!' });
  });
});

app.delete('/products/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Produto deletado com sucesso!' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
