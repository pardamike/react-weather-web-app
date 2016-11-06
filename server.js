var express = require('express');

// Create the app
var app = express();

// Tell it which folder to serve
app.use(express.static('public'));

// Start the server
app.listen(3000, function() {
  console.log('Express Server is up on port 3000!');
});
