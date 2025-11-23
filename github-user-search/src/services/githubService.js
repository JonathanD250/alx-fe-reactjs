import axios from 'axios';

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });
  return response.data;
};

export default fetchUserData;