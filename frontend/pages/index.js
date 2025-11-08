import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
<<<<<<< HEAD
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
=======
  const [apiStatus, setApiStatus] = useState('checking');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    checkApiStatus();
  }, []);

  const checkApiStatus = async () => {
    try {
      const response = await axios.get(`${process.env.API_URL || 'http://localhost:5000'}/health`);
      setApiStatus('online');
      setApiData(response.data);
    } catch (error) {
      setApiStatus('offline');
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
    }
  };

  return (
    <>
      <Head>
<<<<<<< HEAD
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
=======
        <title>Microservices App | Home</title>
        <meta name="description" content="Modern microservices application with Next.js and Express.js" />
      </Head>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Hero Section */}
          <div className="card p-8">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Microservices App
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Modern web application built with Next.js, Express.js, and Docker
            </p>
            
            {/* API Status Badge */}
            <div className="inline-flex items-center space-x-2 mb-8">
              <span className={`w-3 h-3 rounded-full ${
                apiStatus === 'online' ? 'bg-green-500' : 
                apiStatus === 'checking' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></span>
              <span className="text-sm font-medium">
                API Status: {apiStatus === 'checking' ? 'Checking...' : 
                           apiStatus === 'online' ? 'Online' : 'Offline'}
              </span>
            </div>

            {apiData && (
              <div className="bg-slate-900/50 rounded-lg p-4 mb-6 text-left">
                <pre className="text-xs text-slate-300 overflow-x-auto">
                  {JSON.stringify(apiData, null, 2)}
                </pre>
              </div>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">⚡ Next.js Frontend</h3>
                <p className="text-slate-400">Server-side rendering and optimized performance</p>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🔧 Express.js API</h3>
                <p className="text-slate-400">RESTful API with robust backend logic</p>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-green-400 mb-2">🐳 Docker Containers</h3>
                <p className="text-slate-400">Containerized microservices architecture</p>
              </div>
              <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">🚀 Production Ready</h3>
                <p className="text-slate-400">Optimized builds and best practices</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/users">
                <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  View Users
                </a>
              </Link>
              <Link href="/about">
                <a className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  About
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
