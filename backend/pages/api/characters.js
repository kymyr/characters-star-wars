import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://develop.d2xuxanvg7ko3t.amplifyapp.com/api/characters');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
};
