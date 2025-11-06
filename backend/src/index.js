// backend/src/index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const posts = [
  { id: 1, title: "Hello World", body: "This is a test post." },
  { id: 2, title: "Deployment", body: "Kubernetes-deployed!" }
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend listening on :${port}`));
