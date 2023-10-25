const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Enable CORS
app.use(cors());

// Define a route to fetch data from the external API
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://develop.d2xuxanvg7ko3t.amplifyapp.com/api/characters');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
