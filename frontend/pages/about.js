import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Colorful Dev Blog</title>
        <meta name="description" content="About this colorful tech blog" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-8 shadow-lg">
          <div className="container mx-auto px-4">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-bold hover:opacity-80">← Back to Blog</a>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About This Blog
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-600 mb-2">⚡ Frontend</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Next.js 13+ with React 18</li>
                  <li>Tailwind CSS</li>
                  <li>Server-side rendering</li>
                  <li>Optimized performance</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-pink-600 mb-2">🔧 Backend</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Express.js REST API</li>
                  <li>JSON data endpoints</li>
                  <li>CORS enabled</li>
                  <li>Health monitoring</li>
                </ul>
              </div>
            </div>

            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700">
                ← Read the Blog
              </a>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}