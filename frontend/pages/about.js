import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Microservices App | About</title>
        <meta name="description" content="Learn about this microservices application" />
      </Head>

      <div className="min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="card p-4 mb-6">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                  ← Back to Home
                </a>
              </Link>
              <h1 className="text-2xl font-bold">About</h1>
            </div>
          </nav>

          {/* Main Content */}
          <div className="card p-8 space-y-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold gradient-text mb-4">About This Application</h2>
              <p className="text-xl text-slate-300">
                A modern microservices application demonstrating best practices
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/30 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Architecture</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Frontend:</strong> Next.js 13 with React 18 for server-side rendering and optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Backend:</strong> Express.js REST API with CORS and logging middleware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Containerization:</strong> Docker with multi-stage builds for optimized images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Reverse Proxy:</strong> Nginx for load balancing and security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/30 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Frontend</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Server-side rendering</li>
                      <li>• Responsive design</li>
                      <li>• API integration</li>
                      <li>• Loading states</li>
                      <li>• Error handling</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Backend</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• RESTful endpoints</li>
                      <li>• Health checks</li>
                      <li>• CORS enabled</li>
                      <li>• Request logging</li>
                      <li>• Error handling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/30 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-400 mb-3">Docker Best Practices</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Multi-stage builds for smaller production images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Non-root user for security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Health checks for container monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Optimized layer caching</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-6 border-t border-slate-700">
                <Link href="/">
                  <a className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    Back to Home
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
