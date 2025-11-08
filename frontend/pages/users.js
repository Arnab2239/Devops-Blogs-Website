import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.API_URL || 'http://localhost:5000'}/api/users`);
      setUsers(response.data.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Microservices App | Users</title>
        <meta name="description" content="View and manage users from the API" />
      </Head>

      <div className="min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <nav className="card p-4 mb-6">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                  ← Back to Home
                </a>
              </Link>
              <h1 className="text-2xl font-bold">User Management</h1>
            </div>
          </nav>

          {/* Main Content */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold gradient-text">Users</h2>
              <button
                onClick={fetchUsers}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Refresh
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
              </div>
            ) : (
              /* Users Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <div key={user.id} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-1 rounded-full">
                        {user.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{user.name}</h3>
                    <p className="text-slate-400 text-sm">{user.email}</p>
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <span className="text-xs text-slate-500">ID: #{user.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stats */}
            {!loading && !error && (
              <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between text-sm text-slate-400">
                <span>Total Users: {users.length}</span>
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
