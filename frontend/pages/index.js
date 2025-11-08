import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/posts`);
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Colorful Dev Blog</title>
        <meta name="description" content="A vibrant tech blog built with Next.js and Docker" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-16 shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">🌈 Colorful Dev Blog</h1>
            <p className="text-center text-2xl opacity-90">Tech stories in vibrant colors</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600">Loading colorful content...</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center">
                    <div className="text-6xl">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
                        #{post.id}
                      </span>
                      <span className="text-xs text-gray-500">⏱️ {post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h2>
                    
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-600">👤 {post.author}</span>
                      <span className="text-sm text-gray-500">📅 {post.date}</span>
                    </div>
                    
                    <Link href={`/posts/${post.id}`} legacyBehavior>
                      <a className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
                        Read More →
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-medium mb-2">🚀 Built with Docker & Next.js</p>
            <p className="text-gray-400">© 2024 Colorful Dev Blog</p>
          </div>
        </footer>
      </div>
    </>
  );
}