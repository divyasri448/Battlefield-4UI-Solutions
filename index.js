const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const serverData = require('./data/serverData.json');

app.get('/api/server-info', (req, res) => {
  res.json(serverData);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});