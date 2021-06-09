const path = require('path');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

// Create app
const app = express();

//  Implement middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Sentiment analysis running on port 8081!');
});

// Implement routes
app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'));
});

app.get('/test', (req, res) => {
  res.send('Server listening');
});

// Implement analysis route
app.post('/analyseURL', async function (req, res) {
  const url = req.body.url;

  if (url == null) {
    res
      .status(400)
      .send('No URL data in request body or badly formatted request');
    return;
  }

  // build URL
  const BASE_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${url}`;

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((parsed) => res.send(parsed))
    .catch((e) => res.status(400).send(e));
});
