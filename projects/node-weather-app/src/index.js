const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
  console.log('Node Serving /', req.body);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/weather', (req, res) => {
  console.log('Node Serving /weather', req.body);
  res.send('Req to /weather');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
