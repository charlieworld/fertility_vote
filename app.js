const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require("node-fetch");


const app = express();
app.use(express.json());
const port = 9300;

// Where we will keep books
let books = [];

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello here');
});

app.post('/vote', async (req, res) => {
    // We will be coding here

  console.log('Got body:', req.body);
  if(!req.body) {
    response.status(400).send('no data')
    return;
  }

  if(!req.body.actionURL) {
    response.status(400).send('no actionURL')
    return;
  }

  const apiRes = await fetch(req.body.actionURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: req.body.data
  })
  res.send(apiRes);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));