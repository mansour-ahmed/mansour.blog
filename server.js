
var express = require('express');
var path = require('path');

const port = 80;
const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
  console.log('App running on port:' + port);
});