// frontend/src/App.jsx
import React, { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/posts")
      .then((r) => r.json())
      .then(setPosts)
      .catch(console.error);
  }, []);
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>DevOps Blog (2-tier)</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
