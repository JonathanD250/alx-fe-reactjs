import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // Function to handle the initial search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData([]); // Clear previous results
    setPage(1); // Reset to page 1

    try {
      const data = await fetchUserData({ username, location, minRepos, page: 1 });
      setUserData(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Function to load more results (Pagination)
  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);

    try {
      const data = await fetchUserData({ username, location, minRepos, page: nextPage });
      // Append new users to the existing list
      setUserData((prevData) => [...prevData, ...data.items]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Advanced GitHub Search</h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Location (e.g., San Francisco)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
          Search
        </button>
      </form>

      {/* Loading & Error States */}
      {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">Looks like we cant find the user</p>}

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {userData.map((user) => (
          <div key={user.id} className="bg-white border border-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center text-gray-800">{user.login}</h2>
            
            {/* Note: The Search API doesn't return full details like location/repos for every user in the list.
                We usually need to fetch individual details to see that. For now, we display what is available. */}
            <div className="text-center mt-2">
               <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {userData.length > 0 && !loading && (
        <div className="text-center mt-6">
          <button 
            onClick={loadMore} 
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;