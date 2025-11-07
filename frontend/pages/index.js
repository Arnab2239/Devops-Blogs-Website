import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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
    }
  };

  return (
    <>
      <Head>
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
