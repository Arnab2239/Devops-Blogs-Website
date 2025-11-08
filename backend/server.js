const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
// Sample blog posts (static data - no database!)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Docker",
    excerpt: "Learn the basics of containerization",
    content: "Docker revolutionizes how we deploy applications by packaging them into containers. These containers include everything needed to run the application - code, runtime, system tools, and libraries.\n\nIn this post, we'll explore:\n- Why Docker matters\n- Basic Docker commands\n- Creating your first Dockerfile\n- Best practices for containerization",
    author: "Admin",
    date: "2024-01-15",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Building Microservices with Node.js",
    excerpt: "A practical guide to microservices architecture",
    content: "Microservices offer scalability and flexibility that monolithic applications can't match. By breaking down your application into smaller, independent services, you can deploy, scale, and maintain each component separately.\n\nKey topics covered:\n- Designing microservices boundaries\n- Inter-service communication\n- Docker Compose for local development\n- API Gateway pattern",
    author: "Admin",
    date: "2024-01-20",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Next.js Best Practices",
    excerpt: "Tips for building modern web applications",
    content: "Next.js combines the best of React with server-side rendering, static generation, and API routes. This powerful framework gives you the tools to build blazing-fast web applications.\n\nWe'll dive into:\n- File-based routing\n- Data fetching strategies\n- Image optimization\n- SEO best practices",
    author: "Admin",
    date: "2024-01-25",
    readTime: "6 min"
  }
];

=======
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

<<<<<<< HEAD
// API Routes
app.get('/api', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Blog API is online',
    posts: blogPosts.length
  });
});

app.get('/api/posts', (req, res) => {
  res.json(blogPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: post.date,
    readTime: post.readTime
  })));
});

app.get('/api/posts/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

=======
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
<<<<<<< HEAD
    service: 'blog-backend-api',
=======
    service: 'backend-api',
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
    timestamp: new Date().toISOString()
  });
});

<<<<<<< HEAD
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Blog Backend API running on port ${PORT}`);
});
=======
// Routes
app.use('/api/users', require('./routes/users'));

// Welcome endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Backend API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      health: '/health'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API running on port ${PORT}`);
});
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
