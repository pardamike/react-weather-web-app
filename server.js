var express = require('express');

// Create the app
var app = express();
const PORT = process.env.PORT || 3000;

// Open Weather (free) only accepts http not https
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Tell it which folder to serve
app.use(express.static('public'));

// Start the server
app.listen(PORT, function() {
  console.log('Express Server is up on port ' + PORT);
});
