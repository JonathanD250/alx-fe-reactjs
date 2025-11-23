import axios from 'axios';

const fetchUserData = async ({ username, location, minRepos }) => {
  // Construct the query string
  // Example: "tom location:madrid repos:>10"
  let query = '';
  
  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

export default fetchUserData;