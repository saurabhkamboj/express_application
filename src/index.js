import 'dotenv/config';

import express from 'express';

const app = express();

app.listen(3000, () => 
  console.log('Personal app listening on port 3000!'),
);

console.log('An ever running Node.js personal project.');
console.log(process.env.MY_SECRET);
