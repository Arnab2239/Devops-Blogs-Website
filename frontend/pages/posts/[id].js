import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || '/api'}/posts/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch post:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/" legacyBehavior>
            <a className="text-purple-600 font-semibold hover:text-purple-800">← Back to Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Colorful Dev Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-8 shadow-lg">
          <div className="container mx-auto px-4">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold hover:opacity-80">← Back to Blog</a>
            </Link>
          </div>
        </header>

        {/* Main Article */}
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Gradient top bar */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
            
            <div className="p-8 md:p-12">
              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <span className="flex items-center">👤 {post.author}</span>
                <span className="flex items-center">📅 {post.date}</span>
                <span className="flex items-center">⏱️ {post.readTime}</span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                <p className="text-xl text-gray-600 mb-6 italic">{post.excerpt}</p>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                  <p className="text-gray-700">{post.content}</p>
                </div>
              </div>

              {/* Author Section */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{post.author}</h4>
                    <p className="text-gray-600 text-sm">Blog Author</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700">
                ← Back to All Posts
              </a>
            </Link>
          </div>
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