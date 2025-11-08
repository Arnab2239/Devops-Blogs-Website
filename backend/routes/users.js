const express = require('express');
const router = express.Router();

// Mock users data
const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Administrator' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer' },
  { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Designer' },
  { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Manager' },
  { id: 5, name: 'Emma Brown', email: 'emma@example.com', role: 'Developer' }
];

// GET /api/users - Get all users
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST /api/users - Create new user
router.post('/', (req, res) => {
  const { name, email, role } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: role || 'User'
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    data: newUser
  });
});

module.exports = router;
