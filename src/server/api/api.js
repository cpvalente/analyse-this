const dotenv = require('dotenv');
dotenv.config();

const formdata = new FormData();
formdata.append('key', process.env.API_KEY);
formdata.append('txt', 'YOUR TEXT HERE');
formdata.append('lang', 'en');

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
};

const response = fetch(
  'https://api.meaningcloud.com/sentiment-2.1',
  requestOptions
)
  .then((response) => ({
    status: response.status,
    body: response.json(),
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch((error) => console.log('error', error));
