// server.js
const express = require('express');
const app = express();

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Server!');
});

// GET endpoint
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

// POST endpoint
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

// PUT endpoint
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  res.json({ message: `User ${id} updated`, user: updatedUser });
});

// DELETE endpoint
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} deleted` });
});

// Health-check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
