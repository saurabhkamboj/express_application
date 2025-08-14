import 'dotenv/config';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => 
  console.log('Personal app listening on port 3000!'),
);
