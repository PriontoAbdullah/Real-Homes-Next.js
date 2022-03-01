import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '3c99aa1f2emshc17d4d8dcd2788cp1fe692jsn570d2e0addaa',
    },
  });

  return data;
};
